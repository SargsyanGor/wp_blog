import React from 'react'
import { Favorite } from 'grommet-icons'

interface Props {
  theme: string
}

const Likes = ({ theme }: Props) => {
  return (
    <>
      <button className="w-14">
        <Favorite
          color={theme === 'light' ? 'white' : 'black'}
          size="large"
          className="transition-all duration-500 hover:stroke-amber-500"
        ></Favorite>
      </button>
      <span className={`ml-3 text-lg font-light ${theme === 'light' ? 'text-white' : 'text-black'}`}>759</span>
    </>
  )
}

export default Likes
