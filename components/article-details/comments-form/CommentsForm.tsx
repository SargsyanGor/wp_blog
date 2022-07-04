import React from 'react'
import { Favorite } from 'grommet-icons'

const CommentsForm = () => {
    return (
        <form action="">
            <div className="mb-6">
                <label htmlFor="commentField">
                    Մեկնաբանություն
                    <span className="required" aria-hidden="true">
                  *
                </span>
                </label>
                <textarea
                    className="mt-3 w-full bg-gray-100 p-5"
                    id="commentField"
                    rows={10}
                    maxLength={65525}
                ></textarea>
            </div>
            <div className="mb-6">
                <label htmlFor="nameField">
                    Ձեր անունը
                    <span className="required" aria-hidden="true">
                  *
                </span>
                </label>
                <input
                    type="text"
                    className="mt-3 h-16 w-full bg-gray-100 p-5"
                    id="nameField"
                ></input>
            </div>
            <div className="mb-6">
                <label htmlFor="emailField">
                    Մեյլի հասցեն
                    <span className="required" aria-hidden="true">
                  *
                </span>
                </label>
                <input
                    type="email"
                    className="mt-3 h-16 w-full bg-gray-100 p-5"
                    id="emailField"
                ></input>
            </div>
            <button
                type="submit"
                className="mt-8 border-2 border-black py-3 px-6 duration-500 hover:bg-gray-100"
            >
                Հրապարակել
            </button>
        </form>
    )
}

export default CommentsForm
