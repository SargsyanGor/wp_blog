import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { validate } from 'email-validator'
import { replaceWithBr } from '../../helpers'
import {FormClose} from "grommet-icons";

type Props = {
  isOpen: boolean
  setIsOpen: (dialogState: boolean) => void
}

const SubscribeDialog: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState<string>('')
  const [emailError, setEmailError] = useState<string>('')
  const [showWarningsBlock, setStateOfWarningsBlock] = useState<boolean>(false)
  const [showSuccessMessage, setStateShowSuccessMessage] = useState<boolean>(false)

  const closeModal = () => {
    setIsOpen(false)
    setStateOfWarningsBlock(false)
    setStateShowSuccessMessage(false)
    setEmailError('')
    setEmail('')
  }

  const submitRequest = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (validate(email)) {
      setStateOfWarningsBlock(false)
      // make request

      const res = await fetch("/api/subscribe_user", {
        body: JSON.stringify({
          email: email,
        }),

        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      if(res.status === 201) {
        setStateShowSuccessMessage(true)
      } else {
        setStateShowSuccessMessage(false)
        setEmailError('Կա սխալ :(')
        setStateOfWarningsBlock(true)
      }
    } else {
      if (!email.length) {
        setEmailError('Մուտքագրեք ձեր մեյլի հասցեն<span class="text-red-600 text-lg">*</span>')

      } else {
        setEmailError('Մուտքագրեք գոյություն ունեցող մեյլի հասցե<span class="text-red-600 text-lg">*</span>')
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
                <button onClick={closeModal} className='absolute right-6 top-6'><FormClose/></button>

                <Dialog.Title
                  as="h3"
                  className="relative my-6 text-lg font-medium leading-6 text-gray-900"
                >
                  Բաժանորդագրվել
                </Dialog.Title>
                <div className="mt-2">
                  <p className="mb-7 text-sm text-gray-500">
                    Հետագա գրառումները բաց չթողնելու համար կարող եք
                    բաժանորդագրվել՝ թարմացումների մասին կտեղեկանաք ձեր մեյլի
                    միջոցով:
                  </p>
                  <form onSubmit={submitRequest}>
                    <div className="flex flex-col sm:flex-row">
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        className="w-full border-4 border border-solid border-black py-2 px-4 text-gray-700"
                        placeholder="Հավաքեք ձեր մեյլը"
                      />
                      <button
                        type="submit"
                        className="bg-black px-8 font-bold text-white transition-all duration-500 ease-in md:hover:bg-gray-800 sm:py-0 py-3"
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
                    <p
                        className="mt-5 text-left text-xs text-black font-bold italic"
                        dangerouslySetInnerHTML={{
                          __html: replaceWithBr(emailError),
                        }}
                    ></p>
                  </Transition>

                  <Transition
                      show={showSuccessMessage}
                      enter="transition-opacity duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                  >
                    <p
                        className="mt-5 text-left text-xs text-green-600 text-black font-bold italic"
                    >
                      Շնորհակալություն բաժանորդագրվելու համար
                    </p>
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
