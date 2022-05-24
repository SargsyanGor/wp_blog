import React from 'react'
import Link from 'next/link'
import { FacebookOption, LinkedinOption, Instagram } from 'grommet-icons'
import style from './sidebar.module.scss'

const Sidebar = () => {
  return (
    <aside className={style.gs_main_sidebar}>
      <div className={style.gs_subscribe_block}>
        <span className={style.gs_social_icon}>
          <Link href="/">
            <a>
              <FacebookOption color="black"></FacebookOption>
            </a>
          </Link>
        </span>
        <span className={style.gs_social_icon}>
          <Link href="/">
            <a>
              <Instagram color="dark"></Instagram>
            </a>
          </Link>
        </span>
        <span className={style.gs_social_icon}>
          <Link href="/">
            <a>
              <LinkedinOption color="dark"></LinkedinOption>
            </a>
          </Link>
        </span>
        <p className={style.gs_rotated_text}>
          <button>Բաժանորդագրվել</button>
        </p>
      </div>
    </aside>
  )
}

export default Sidebar
