import React, {useState} from 'react'
import style from './comments.module.scss'
import LeaveCommentDialog from "../../dialogs/LeaveCommentDialog";

const Comments = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
      <>
        <ul>
          <li>
            <div className="mb-24 flex items-start">
              <img
                  className="mr-8 w-24 rounded-full object-contain"
                  src="/user-avatar.jpeg"
                  alt=""
              />
              <div className="w-full mt-4">
                <div className="flex justify-between">
                  <div>
                    <div className="text-lg">Nubel</div>
                    <button onClick={() => setIsOpen(true)} className="text-sm text-gray-500 duration-500 hover:text-amber-600">
                      Reply
                    </button>
                  </div>
                  <div className="text-xs text-gray-400">February 16, 2016</div>
                </div>
                <p className="mt-8">
                  Donec iaculis massa arcu, ac semper metus dictum in. Maecenas non
                  semper metus. Nullam dignissim neque sit amet scelerisque
                  vestibulum.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="mb-24 flex items-start">
              <img
                  className="mr-8 w-24 rounded-full object-contain"
                  src="/user-avatar.jpeg"
                  alt=""
              />
              <div className="w-full mt-4">
                <div className="flex justify-between">
                  <div>
                    <div className="text-lg">Alexia</div>
                    <button onClick={() => setIsOpen(true)} className="text-sm text-gray-500 duration-500 hover:text-amber-600">
                      Reply
                    </button>
                  </div>
                  <div className="text-xs text-gray-400">February 16, 2016</div>
                </div>
                <p className="mt-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus adipisci, amet at beatae culpa deleniti dolore
                  exercitationem laboriosam maiores molestiae, molestias non
                  praesentium reprehenderit sunt tempore unde voluptates.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="mb-24 flex items-start">
              <img
                  className="mr-8 w-24 rounded-full object-contain"
                  src="/user-avatar.jpeg"
                  alt=""
              />
              <div className="w-full mt-4">
                <div className="flex justify-between">
                  <div>
                    <div className="text-lg">Juliet</div>
                    <button onClick={() => setIsOpen(true)} className="text-sm text-gray-500 duration-500 hover:text-amber-600">
                      Reply
                    </button>
                  </div>
                  <div className="text-xs text-gray-400">February 16, 2016</div>
                </div>
                <p className="mt-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium assumenda aut doloribus expedita maiores suscipit. A
                  accusantium ad architecto commodi consectetur culpa cum dolorem
                  eius eos ex in iste, laborum minima molestias nam natus
                  necessitatibus officia quaerat quibusdam quod repellat saepe
                  sapiente similique tempora vitae, voluptate voluptates. Aliquam
                  consectetur dolore expedita ipsum laborum nam, quod reiciendis rem
                  tempore.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="mb-24 flex items-start">
              <img
                  className="mr-8 w-24 rounded-full object-contain"
                  src="/user-avatar.jpeg"
                  alt=""
              />
              <div className="w-full mt-4">
                <div className="flex justify-between">
                  <div>
                    <div className="text-lg">Cubell</div>
                    <button onClick={() => setIsOpen(true)} className="text-sm text-gray-500 duration-500 hover:text-amber-600">
                      Reply
                    </button>
                  </div>
                  <div className="text-xs text-gray-400">February 16, 2016</div>
                </div>
                <p className="mt-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
                  earum eos sequi tempora tempore tenetur.
                </p>
              </div>
            </div>
          </li>
          <li>
            <ul className={style.gs_children}>
              <li>
                <div className="mb-24 flex items-start">
                  <img
                      className="mr-8 w-24 rounded-full object-contain"
                      src="/user-avatar.jpeg"
                      alt=""
                  />
                  <div className="w-full mt-4">
                    <div className="flex justify-between">
                      <div>
                        <div className="text-lg">Nubel</div>
                        <button onClick={() => setIsOpen(true)} className="text-sm text-gray-500 duration-500 hover:text-amber-600">
                          Reply
                        </button>
                      </div>
                      <div className="text-xs text-gray-400">February 16, 2016</div>
                    </div>
                    <p className="mt-8">
                      Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <LeaveCommentDialog isOpen={isOpen} setIsOpen={setIsOpen}/>
      </>
  )
}

export default Comments
