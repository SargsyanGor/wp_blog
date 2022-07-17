import type { NextPage } from 'next'
import style from '/styles/pages/homepage.module.scss'
import { getPosts } from '../services'
import { GetStaticProps } from 'next'
import { PropTypePosts } from '../types'
import SingleArticle from '../components/homepage/SingleArticle'
import { useState } from 'react'

const Home: NextPage<PropTypePosts> = ({ postsData }) => {
  const { aggregate, edges, pageInfo } = postsData
  const [postsState, setPosts] = useState(edges)
  const [lastPostCursorValue, setLastPostCursorValue] = useState(
    pageInfo.endCursor
  )

  const loadMorePostsButton = () => {
    if (aggregate.count === postsState.length) {
      return false
    } else {
      return (
        <button
          onClick={async () => {
            const morePostsData = await getPosts(lastPostCursorValue)
            setLastPostCursorValue(morePostsData.pageInfo.endCursor)
            const updatedPostsData = [...postsState, ...morePostsData.edges]
            setPosts(updatedPostsData)
          }}
          className="group relative w-1/3 border-2 border-black font-bold lg:transition-transform lg:duration-200 lg:ease-in lg:hover:scale-105"
        >
          <span className="absolute inset-0 bg-black lg:transition-transform lg:duration-300 lg:ease-in lg:group-hover:scale-x-105 lg:group-hover:scale-y-150"></span>
          <div className="relative bg-white py-3 text-sm md:text-base">Բեռնել ավելին</div>
        </button>
      )
    }
  }

  return (
    <>
      <section
        className={
          `flex flex-col justify-between md:flex-row md:flex-wrap ` +
          style.gs_main_articles_wrapper
        }
      >
        {postsState &&
          postsState.map((post, index) => {
            const articleSize = index % 3 === 0 // add 'gs_article_big' class every 3rd article
            return (
              <SingleArticle
                post={post.node}
                bigArticle={articleSize}
                key={post.node.createdAt}
              />
            )
          })}
      </section>
      <section className='my-16 w-full text-center'>
        {loadMorePostsButton()}
      </section>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const data = (await getPosts()) || []

  return {
    props: { postsData: data },
  }
}
