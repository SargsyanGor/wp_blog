import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { validate } from 'email-validator'
import { replaceWithBr } from '../../helpers'

type Props = {
  isOpen: boolean
  setIsOpen: (dialogState: boolean) => void
}

const SubscribeDialog: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState<string>('')
  const [emailError, setEmailError] = useState<string>('')
  const [showWarningsBlock, setStateOfWarningsBlock] = useState<boolean>(false)

  const closeModal = () => {
    setIsOpen(false)
    setStateOfWarningsBlock(false)
    setEmailError('')
    setEmail('')
  }

  const submitRequest = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (validate(email)) {
      // closeModal()
      setStateOfWarningsBlock(false)
      console.log('success')
    } else {
      if (email.length === 0) {
        setEmailError(
          'Չստացվեց գուշակել ձեր մեյլի հասցեն :) \n Խնդրում ենք գրել մեյլը'
        )
      } else {
        setEmailError('Ճիշտ ե՞ք հավաքում ձեր մեյլը')
      }
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
          <div className="flex min-h-full items-center justify-center p-4 text-center">
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
                <button onClick={closeModal} className='absolute bg-orange-400 w-40 h-40 -right-20 -top-20 text-center text-sm flex items-end pb-3 justify-center text-white rotate-45'>Փոշմանել</button>

                <Dialog.Title
                  as="h3"
                  className="relative my-6 text-center text-lg font-medium leading-6 text-gray-900"
                >
                  Բաժանորդագրվել
                </Dialog.Title>
                <div className="mt-2">
                  <p className="mb-7 text-center text-sm text-gray-500">
                    Հետագա գրառումները բաց չթողնելու համար կարող եք
                    բաժանորդագրվել՝ թարմացումների մասին կտեղեկանաք ձեր մեյլի
                    միջոցով:
                  </p>
                  <form onSubmit={submitRequest}>
                    <div className="flex">
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        className="w-full border-4 border border-solid border-black py-2 px-4 text-gray-700"
                        placeholder="Հավաքեք ձեր մեյլը"
                      />
                      <button
                        type="submit"
                        className="bg-black px-8 font-bold text-white transition-all duration-500 ease-in hover:bg-gray-800"
                      >
                        Հաստատել
                      </button>
                    </div>
                  </form>
                  <Transition
                    show={showWarningsBlock}
                    enter="transition-opacity duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div
                      className="mt-8 mb-6 border-t-4 border-orange-500 bg-stone-600 px-4 py-3 text-left text-teal-900 shadow-md"
                      role="alert"
                    >
                      <div className="flex">
                        <div className="py-1">
                          <svg
                            className="mr-4 h-6 w-6 fill-current text-orange-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-bold text-white">Կա խնդիր` կա լուծում</p>
                          <p
                            className="text-sm text-white"
                            dangerouslySetInnerHTML={{
                              __html: replaceWithBr(emailError),
                            }}
                          >
                          </p>
                        </div>
                      </div>
                    </div>
                  </Transition>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default SubscribeDialog
