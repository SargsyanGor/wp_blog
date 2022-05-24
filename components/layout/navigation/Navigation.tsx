import React from 'react'
import { Menu } from 'grommet-icons'
import style from './navigation.module.scss'

const Navigation = () => {
  return (
    <nav className={style.gs_main_navbar}>
      <div className={style.gs_hamburger_activator_block}>
        <button>
          <Menu color="black" />
        </button>
      </div>
    </nav>
  )
}

export default Navigation
