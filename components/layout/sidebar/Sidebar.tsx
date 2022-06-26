import React, { useState } from 'react'
import Link from 'next/link'
import {FacebookOption, LinkedinOption, Pinterest} from 'grommet-icons'
import SubscribeDialog from '../../dialogs/SubscribeDialog'
import style from './sidebar.module.scss'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <aside id='gs_sidebar' className={style.gs_main_sidebar}>
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
                <Pinterest color="dark"></Pinterest>
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
            <button onClick={() => setIsOpen(true)}>Բաժանորդագրվել</button>
          </p>
        </div>
      </aside>
      <SubscribeDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default Sidebar
