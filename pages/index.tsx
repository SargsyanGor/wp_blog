import type { NextPage } from 'next'
import style from '/styles/pages/homepage.module.scss'
import { getPosts, getAllPosts } from '../services'
import { GetStaticProps} from 'next'
import { PropTypePosts } from '../types'
import generateRSS from '../helpers/generateRssFeed'
import SingleArticle from '../components/homepage/SingleArticle'
import React, { useState } from 'react'
import Head from 'next/head'

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
          <div className="relative bg-white py-3 text-sm md:text-base">
            Բեռնել ավելին
          </div>
        </button>
      )
    }
  }

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="The Whitepaper - Բլոգ Front-end ծրագրավորման մասին"
        />

        <meta
          property="og:description"
          content="WhitePaper-ը բլոգ է` Front-end ծրագրավորման մասին: Այստեղ դու կգտնես լիքը նյութեր՝ Hard/Soft skills-երի, անձնային աճի, սթրեսակայունության և այլնի մասին:"
        />
        <meta property="og:url" content="https://www.whitepaper.am/" />
        <meta
          property="og:image"
          content="https://www.whitepaper.am/favicon.ico"
        />
        <link rel="canonical" href="https://www.whitepaper.am/" />
        <title>The Whitepaper - Բլոգ Front-end ծրագրավորման մասին</title>
        <meta
          name="description"
          content="WhitePaper-ը բլոգ է` Front-end ծրագրավորման մասին: Այստեղ դու կգտնես լիքը նյութեր՝ Hard/Soft skills-երի, անձնային աճի, սթրեսակայունության և այլնի մասին:"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      <section className="my-16 w-full text-center">
        {loadMorePostsButton()}
      </section>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = (await getAllPosts()) || []
  // calling to generate the feed
  await generateRSS(allPosts)

  const data = (await getPosts()) || []
  return {
    props: { postsData: data },
  }
}
