import React, { useState } from 'react'
import { validate } from 'email-validator'
import { Transition } from '@headlessui/react'
import { replaceWithBr } from '../../../helpers'
import { submitComment } from '../../../services'

const CommentsForm = ({ slug }: any) => {
  const [comment, setComment] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [showWarningsBlock, setStateOfWarningsBlock] = useState<boolean>(false)
  const [showSuccessMessage, setStateOfSuccessMessage] =
    useState<boolean>(false)

  const submitRequest = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!name.length || !comment.length || !email.length) {
      setErrorMessage(
        'Լրացրեք բոլոր պարտադիր դաշտերը<span class="text-red-600 text-lg">*</span>'
      )
      setStateOfWarningsBlock(true)
      return
    }

    if (!validate(email)) {
      setErrorMessage(
        'Մուտքագրեք գոյություն ունեցող մեյլի հասցե<span class="text-red-600 text-lg">*</span>'
      )
      setStateOfWarningsBlock(true)
      return
    }
    setStateOfWarningsBlock(false)

    // Make request
    const commentObj = { name, email, comment, slug }

    submitComment(commentObj)
      .then((res) => {
        setStateOfSuccessMessage(true)

        setComment('')
        setName('')
        setEmail('')

        setTimeout(() => {
          setStateOfSuccessMessage(false)
        }, 7000)
      })
      .catch((error) => alert(error))
  }

  return (
    <form onSubmit={submitRequest}>
      <div className="mb-6">
        <label htmlFor="commentField">
          Մեկնաբանություն
          <span className="required" aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          className="mt-3 w-full bg-gray-100 p-5"
          id="commentField"
          rows={10}
          maxLength={65525}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-6">
        <label htmlFor="nameField">
          Ձեր անունը
          <span className="required" aria-hidden="true">
            *
          </span>
        </label>
        <input
          type="text"
          className="mt-3 h-16 w-full bg-gray-100 p-5"
          id="nameField"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div className="mb-6">
        <label htmlFor="emailField">
          Մեյլի հասցեն
          <span className="required" aria-hidden="true">
            *
          </span>
        </label>
        <input
          type="text"
          className="mt-3 h-16 w-full bg-gray-100 p-5"
          id="emailField"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
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
          className="mt-2 text-xs font-bold italic text-black"
          dangerouslySetInnerHTML={{
            __html: replaceWithBr(errorMessage),
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
        <p className="mt-2 text-xs text-green-600">
          Շնորհակալություն: Ձեր մեկնաբանությունն ուղարված է: <br></br>{' '}
          Հաստատվելու դեպքում այն կհայտնվի{' '}
          <span className="font-bold">Մեկնաբանություններ</span> բաժնում
        </p>
      </Transition>
      <button
        type="submit"
        className="mt-8 border-2 border-black py-3 px-6 duration-500 hover:bg-gray-100"
      >
        Հրապարակել
      </button>
    </form>
  )
}

export default CommentsForm
