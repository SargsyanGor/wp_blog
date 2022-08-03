import React, { useEffect, useState } from 'react'
import { getComments } from '../../../services'
import moment from 'moment'
import parse from 'html-react-parser'

const Comments = ({ slug }: any) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(slug).then((results) => setComments(results))
  }, [])

  return (
    <>
      {comments.length > 0 ? (
        <p className="mb-16 text-center text-lg font-bold sm:text-2xl">
          Մեկնաբանություններ({comments.length})
        </p>
      ) : (
        ''
      )}

      <ul>
        {comments.length > 0 &&
          comments.map((comment: any) => (
            <li key={comment.createdAt}>
              <div className="mb-24 flex items-start">
                <img
                  className="mr-8 w-16 rounded-full object-contain sm:w-24"
                  src="/user-avatar.jpeg"
                  alt=""
                />
                <div className="w-full">
                  <div className="flex flex-col-reverse justify-between sm:flex-row">
                    <div>
                      <div className="text-lg">{comment.name}</div>
                    </div>
                    <div className="text-xxs text-gray-400 sm:text-xs">
                      {moment(comment.createdAt).format('DD. MM. YYYY')}
                    </div>
                  </div>
                  <p className="mt-8 text-xs sm:text-base">
                    {parse(comment.comment)}
                  </p>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </>
  )
}

export default Comments
