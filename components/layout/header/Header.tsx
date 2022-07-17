import React, { useState } from 'react'
import style from './header.module.scss'
import Link from 'next/link'
import { FacebookOption, LinkedinOption, Menu, Pinterest } from 'grommet-icons'
import SubscribeDialog from '../../dialogs/SubscribeDialog'

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [navigationState, setNavigationState] = useState<boolean>(false)

  return (
    <>
      <header
        className={`flex items-center justify-center ${style.gs_main_header}`}
      >
        <Link href="/">
          <a className={`text-2xl font-bold ` + style['gs_brand']}>
            The WhitePaper
          </a>
        </Link>
      </header>
      <nav className="sticky top-0 z-50 bg-black py-3 px-4 md:hidden">
        <section className="flex items-center">
          <div className="mr-auto flex items-center">
            <p className="text-xs text-white">
              <button onClick={() => setIsOpen(true)}>Բաժանորդագրվել</button>
            </p>
            <Link href="/">
              <a className="mx-1">
                <FacebookOption color="white"></FacebookOption>
              </a>
            </Link>
            <Link href="/">
              <a className="mx-1">
                <Pinterest color="white"></Pinterest>
              </a>
            </Link>
            <Link href="/">
              <a className="mx-1">
                <LinkedinOption color="white"></LinkedinOption>
              </a>
            </Link>
          </div>
          <button onClick={() => {setNavigationState(current => !current)}}>
            <Menu color="white" />
          </button>
        </section>
        <section className={`${navigationState ? 'block' : 'hidden'} text-white text-right text-xs py-4`}>
          <ul>
            <li className="mb-1">
              <Link href="/">
                <a onClick={() => {setNavigationState(false)}}>
                  Գլխավոր էջ
                </a>
              </Link>
            </li>
            <li className="mb-1">
              <Link href="/about">
                <a onClick={() => {setNavigationState(false)}}>
                  Հեղինակի մասին
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a onClick={() => {setNavigationState(false)}}>
                  Կապ
                </a>
              </Link>
            </li>
          </ul>
        </section>
      </nav>
      <SubscribeDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default Header
