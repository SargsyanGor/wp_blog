import React, { useEffect, useRef, useState } from 'react'
import { NextPage } from 'next'
import { Checkmark, Down } from 'grommet-icons'
import style from '../styles/pages/about.module.scss'

const Contact: NextPage = () => {
  const [firstRenderComplete, setFirstRenderComplete] = useState(false)
  const mainContentContainer = useRef(null)

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

  return (
    <>
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
      <div className="container mx-auto w-1/2 py-20" ref={mainContentContainer}>
        <form action="">
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
              type="email"
              className="mt-3 h-16 w-full bg-gray-100 p-5"
              id="emailField"
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
              type="email"
              className="mt-3 h-16 w-full bg-gray-100 p-5"
              id="emailField"
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
            ></textarea>
          </div>
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
