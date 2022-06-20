import type { NextPage } from 'next'
import style from '/styles/pages/homepage.module.scss'
import { getAllPosts } from '../services'
import { GetStaticProps } from 'next'
import { PropTypePosts } from '../types'
import SingleArticle from '../components/homepage/SingleArticle'

const Home: NextPage<PropTypePosts> = ({ posts }) => {
  return (
    <>
      <main
        className={
          `flex flex-wrap justify-between ` + style.gs_main_articles_wrapper
        }
      >
        {posts &&
          posts.map((post, index) => {
            const articleSize = index % 3 === 0 // add 'gs_article_big' class every 3rd article
            return (
              <SingleArticle
                post={post.node}
                bigArticle={articleSize}
                key={post.node.createdAt}
              />
            )
          })}
          <section className="my-16 text-center w-full">
              <button className="group relative w-1/3 border-2 border-black font-bold transition-transform duration-200 ease-in hover:scale-105">
                  <span className="absolute inset-0 bg-black transition-transform duration-300 ease-in group-hover:scale-x-105 group-hover:scale-y-150"></span>
                  <div className="relative bg-white py-3">Բեռնել ավելին</div>
              </button>
          </section>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getAllPosts()) || []
  return {
    props: { posts },
  }
}

export default Home
