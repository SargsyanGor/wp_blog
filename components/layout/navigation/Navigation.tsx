import React, { useState } from 'react'
import { Menu, FormClose } from 'grommet-icons'
import style from './navigation.module.scss'
import Link from 'next/link'

const Navigation = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false)

  return (
    <>
      <nav id="gs_navigation" className={`${style.gs_main_navbar} bg-white hidden md:block`}>
        <div className={style.gs_hamburger_activator_block}>
          <button
            onClick={() => {
              setShowSidebar(true)
            }}
          >
            <Menu color="black" />
          </button>
        </div>
      </nav>
      <div
        className={
          `fixed inset-0 bg-black bg-opacity-50 transition-all duration-200 ease-out ${
            showSidebar ? 'visible opacity-100' : 'invisible opacity-0'
          } ` + style.gs_navbar_overlay
        }
      >
        <div
          className={
            `fixed right-0 top-0 h-full text-white duration-500 ease-in-out ${
              showSidebar ? 'translate-x-0 ' : 'translate-x-full '
            }` + style.gs_navbar_right_content_wrapper
          }
        >
          <button
            onClick={() => {
              setShowSidebar(false)
            }}
            className="absolute right-7 top-6"
          >
            <FormClose color="black" size="large" />
          </button>
          <ul
            className={
              `absolute top-1/2 left-0 w-full text-center ` +
              style.gs_navigation_list
            }
          >
            <li className="mb-1">
              <Link href="/">
                <a
                  onClick={() => {
                    setShowSidebar(false)
                  }}
                  className="text-black duration-300 ease-in-out hover:text-gray-500"
                >
                  Գլխավոր էջ
                </a>
              </Link>
            </li>
            <li className="mb-1">
              <Link href="/about">
                <a
                  onClick={() => {
                    setShowSidebar(false)
                  }}
                  className="text-black duration-300 ease-in-out hover:text-gray-500"
                >
                  Հեղինակի մասին
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  onClick={() => {
                    setShowSidebar(false)
                  }}
                  className="text-black duration-300 ease-in-out hover:text-gray-500"
                >
                  Կապ
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navigation
