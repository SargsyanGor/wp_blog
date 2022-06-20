import React from 'react'
import style from './header.module.scss'
import Link from 'next/link'

const Header = () => {
  return (
    <header
      className={`flex items-center justify-center ` + style.gs_main_header}
    >
      <Link href="/">
        <a className={`text-2xl font-bold ` + style['gs_brand']}>
          The WhitePaper
        </a>
      </Link>
    </header>
  )
}

export default Header
