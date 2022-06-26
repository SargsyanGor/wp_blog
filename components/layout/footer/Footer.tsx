import React from 'react'
import style from './footer.module.scss'

const Footer = () => {
  return (
    <footer
      id="gs_footer"
      className={`relative bg-black text-center text-white ` + style.gs_main_footer}
    >
      <h2 className="mb-4 text-4xl font-bold">The WhitePaper</h2>
      <p className="inline-block max-w-xs text-sm">
        A silky & refined minimalist magazine. <br /> Less is more.
      </p>
      <p className="mt-20 text-xs">
        © Made by
        <a
          className="text-amber-500 transition-all duration-300 hover:text-amber-300"
          target="_blank"
          href="https://www.linkedin.com/in/gor-sargsyan-frontend/"
        >
          {' '}
          me
        </a>{' '}
        2022 <span>|</span> thanks to{' '}
        <a
          className="text-pink-500 transition-all duration-300 hover:text-pink-300"
          target="_blank"
          href="https://www.behance.net/jannamkrtcc3f7/moodboards"
        >
          Janna
        </a>{' '}
      </p>
    </footer>
  )
}

export default Footer
