import React from 'react'
import { Triangle } from 'react-loader-spinner'
import style from './loader.module.scss'

const Loader = () => {
  return (
    <div className={style.gs_loader + ` flex items-center justify-center`}>
      <Triangle
        height="150"
        width="150"
        color="#000000"
        ariaLabel="triangle-loading"
        visible={true}
      />
    </div>
  )
}

export default Loader
