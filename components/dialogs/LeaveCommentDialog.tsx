import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useState } from 'react'
import { validate } from 'email-validator'
import { replaceWithBr } from '../../helpers'

type Props = {
  isOpen: boolean
  setIsOpen: (dialogState: boolean) => void
}

const LeaveCommentDialog: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const [comment, setComment] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [emailError, setEmailError] = useState<string>('')
  const [showWarningsBlock, setStateOfWarningsBlock] = useState<boolean>(false)
  const [showSubmitBtn, setShowSubmitBtnState] = useState<boolean>(false)

  useEffect(() => {
    comment.length && name.length && email.length
      ? setShowSubmitBtnState(true)
      : setShowSubmitBtnState(false)
  }, [comment, name, email])

  const closeModal = () => {
    setIsOpen(false)
    setStateOfWarningsBlock(false)
    setEmailError('')
    setEmail('')
  }

  const submitRequest = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (validate(email)) {
      setStateOfWarningsBlock(false)
    } else {
      setEmailError('Խնդրում ենք մուտքագրել գոյություն ունեցող մեյլի հասցե<span class="text-red-600 text-lg">*</span>')
      setStateOfWarningsBlock(true)
    }
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="gs_dialog relative" onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-lg transform overflow-hidden bg-white px-14 pt-7 pb-14 align-middle shadow-xl transition-all">
                <button
                  onClick={closeModal}
                  className="absolute -right-20 -top-20 flex h-40 w-40 rotate-45 items-end justify-center bg-orange-400 pb-3 text-center text-sm text-white"
                >
                  Փոշմանել
                </button>

                <Dialog.Title
                  as="h3"
                  className="relative my-6 text-center text-lg font-medium leading-6 text-gray-900"
                >
                  Թողնել մեկնաբանություն
                </Dialog.Title>
                <div className="mt-2">
                  <form onSubmit={submitRequest}>
                    <div className="mb-6">
                      <label htmlFor="commentField" className="text-xs">
                        Մեկնաբանություն
                        <span className="required" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <textarea
                        onChange={(e) => setComment(e.target.value)}
                        className="mt-3 w-full bg-gray-100 p-5"
                        id="commentField"
                        rows={5}
                        maxLength={65525}
                      ></textarea>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="nameField" className="text-xs">
                        Ձեր անունը
                        <span className="required" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="mt-3 h-16 w-full bg-gray-100 p-5"
                        id="nameField"
                      ></input>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="emailField" className="text-xs">
                        Մեյլի հասցեն
                        <span className="required" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        className="mt-3 h-16 w-full bg-gray-100 p-5"
                        id="emailField"
                        onChange={(e) => setEmail(e.target.value)}
                      ></input>
                      <Transition
                        show={showWarningsBlock}
                        enter="transition-opacity duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <p
                          className="mt-2 text-xs text-black"
                          dangerouslySetInnerHTML={{
                            __html: replaceWithBr(emailError),
                          }}
                        ></p>
                      </Transition>
                    </div>
                    <button
                      type="submit"
                      className={`${
                        showSubmitBtn
                          ? 'inline-block'
                          : 'hidden'
                      } mt-8 border-2 border-black py-3 px-6 duration-500 hover:bg-gray-100`}
                    >
                      Հրապարակել
                    </button>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default LeaveCommentDialog
