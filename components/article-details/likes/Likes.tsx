import React, { useEffect, useState } from 'react'
import { Favorite } from 'grommet-icons'
import { likePost } from '../../../services'

interface Props {
  theme: string
  likes: number
  slug: string
  incrementLikes: any
  alreadyLikedArticlesList: string[]
}

const Likes = ({
  theme,
  likes,
  slug,
  incrementLikes,
  alreadyLikedArticlesList,
}: Props) => {
  const [disabledLikeButton, setDisabledLikeButton] = useState<boolean>(false)

  useEffect(() => {
    // if post already liked -> not allow to like again
    if (alreadyLikedArticlesList.indexOf(slug) > -1) {
      setDisabledLikeButton(true)
    }
  }, [alreadyLikedArticlesList])

  const likeOnePlus = () => {
    likePost(slug).then((res) => {
      if (res === true) {
        incrementLikes()
      } else {
        alert(res)
      }
    })
  }

  return (
    <>
      <span className="group relative">
        <button
          disabled={disabledLikeButton}
          onClick={() => {
            likeOnePlus()
          }}
          className="w-14"
        >
          <Favorite
            color={theme === 'light' ? 'white' : 'black'}
            size="large"
            className={`${
              !disabledLikeButton
                ? 'transition-all duration-500 hover:stroke-amber-500'
                : ''
            }`}
          ></Favorite>
        </button>
        {disabledLikeButton ? (
          <span className="invisible absolute right-10 bottom-14 w-52 border-2 border-black bg-white p-4 text-center text-sm font-bold text-black opacity-0 transition-all duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
            Դուք արդեն հավանել եք այս հոդվածը, շնորհակալություն
          </span>
        ) : (
          ''
        )}
      </span>
      <span
        className={`ml-3 text-lg font-light ${
          theme === 'light' ? 'text-white' : 'text-black'
        }`}
      >
        {likes}
      </span>
    </>
  )
}

export default Likes
