import React, { useEffect, useRef, useState } from 'react'
import { NextPage } from 'next'
import { Down } from 'grommet-icons'
import style from '../styles/pages/about.module.scss'
import { validate } from 'email-validator'
import { Transition } from '@headlessui/react'
import { replaceWithBr } from '../helpers'
import Head from "next/head";

const Contact: NextPage = () => {
  const [firstRenderComplete, setFirstRenderComplete] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [topic, setTopic] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const mainContentContainer = useRef(null)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [showWarningsBlock, setStateOfWarningsBlock] = useState<boolean>(false)
  const [showSuccessMessage, setStateOfSuccessMessage] =
    useState<boolean>(false)

  useEffect(() => {
    setFirstRenderComplete(true)
  }, [])

  const handleClick = () => {
    window.scrollTo({
      // @ts-ignore
      top: mainContentContainer.current.offsetTop,
      behavior: 'smooth',
    })
  }

  const submitRequest = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!name.length || !email.length || !topic.length || !message.length) {
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
    const messageObj = { name, email, topic, message }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageObj),
    })
      .then((res) => {
        if (res.status === 200) {
          setStateOfSuccessMessage(true)

          setName('')
          setEmail('')
          setTopic('')
          setMessage('')

          setTimeout(() => {
            setStateOfSuccessMessage(false)
          }, 7000)
        }
      })
      .catch((error) => alert(error))
  }

  return (
    <>
      <Head>
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
        ></meta>
        <meta
            name="robots"
            content="noindex, nofollow"
        />
        <link rel="canonical" href="https://www.whitepaper.am/contact" />
        <title>Կապ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`relative bg-black ` + style.gs_primary_image_wrapper}>
        <div
          style={{
            backgroundImage: 'url(/fly.jpg)',
          }}
          className={`${
            firstRenderComplete ? 'opacity-80' : 'opacity-0'
          } absolute top-0 left-0 h-full w-full bg-cover bg-fixed bg-center bg-no-repeat transition-all duration-1000 ease-in`}
        />
        <div className="text-center">
          <button
            onClick={handleClick}
            className="absolute bottom-14 duration-300 hover:bottom-12"
          >
            <Down size="35px" color="white"></Down>
          </button>
        </div>
      </div>
      <div
        className="container mx-auto px-10 py-20 sm:w-1/2 sm:px-0"
        ref={mainContentContainer}
      >
        <form onSubmit={submitRequest}>
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
              onChange={(e) => {
                setName(e.target.value)
              }}
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
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            ></input>
          </div>
          <div className="mb-6">
            <label htmlFor="emailField">
              Թեման
              <span className="required" aria-hidden="true">
                *
              </span>
            </label>
            <input
              maxLength={50}
              type="text"
              className="mt-3 h-16 w-full bg-gray-100 p-5"
              id="emailField"
              value={topic}
              onChange={(e) => {
                setTopic(e.target.value)
              }}
            ></input>
          </div>
          <div className="mb-6">
            <label htmlFor="commentField">
              Նամակը
              <span className="required" aria-hidden="true">
                *
              </span>
            </label>
            <textarea
              className="mt-3 w-full bg-gray-100 p-5"
              id="commentField"
              rows={10}
              maxLength={65525}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value)
              }}
            ></textarea>
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
              Շնորհակալություն: Ձեր նամակն ուղարված է:
            </p>
          </Transition>
          <button
            type="submit"
            className="mt-8 border-2 border-black py-3 px-6 duration-500 hover:bg-gray-100"
          >
            Ուղարկել
          </button>
        </form>
      </div>
    </>
  )
}

export default Contact
