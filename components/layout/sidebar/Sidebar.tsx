import React, { useState } from 'react'
import Link from 'next/link'
import { FacebookOption, LinkedinOption, Pinterest } from 'grommet-icons'
import SubscribeDialog from '../../dialogs/SubscribeDialog'
import style from './sidebar.module.scss'
import Tooltip from 'rc-tooltip'
import 'rc-tooltip/assets/bootstrap_white.css'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      {/* Above 768px(md) */}
      <aside
        id="gs_sidebar"
        className={`${style.gs_main_sidebar} hidden md:block`}
      >
        <div className={style.gs_subscribe_block}>
          <span className={style.gs_social_icon}>
            <a href="https://www.facebook.com/TheWPBlog" target="_blank">
              <Tooltip
                placement="right"
                overlay="Facebook"
                arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
              >
                <FacebookOption color="black"></FacebookOption>
              </Tooltip>
            </a>
          </span>
          <span className={style.gs_social_icon}>
            <a
              href="https://www.linkedin.com/company/the-whitepaper/"
              target="_blank"
            >
              <Tooltip
                placement="right"
                overlay="Linkedin"
                arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
              >
                <LinkedinOption color="dark"></LinkedinOption>
              </Tooltip>
            </a>
          </span>
          <span className={style.gs_social_icon}>
            <a href="https://pin.it/3ZUZl4F" target="_blank">
              <Tooltip
                  placement="right"
                  overlay="Pinterest"
                  arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
              >
                <Pinterest color="dark"></Pinterest>
              </Tooltip>
            </a>
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
