import type { NextPage } from 'next'
import Link from 'next/link'
import { gql } from '@apollo/client'
import client from '../services/apolloClient'
import style from '/styles/pages/homepage.module.scss'

const Home: NextPage = (posts) => {
  return (
    <>
      <main
        className={
          `flex flex-wrap justify-between ` + style.gs_main_articles_wrapper
        }
      >
        <article
          className={
            `gs_article_big group relative mb-1 overflow-hidden text-center ` +
            `${style.gs_article} ${style.gs_article_big}`
          }
        >
          <div
            style={{
              backgroundImage: "url('https://picsum.photos/id/237/800/600')",
            }}
            className={
              `absolute top-0 left-0 right-0 bottom-0 h-full w-full bg-cover bg-center opacity-80 transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:opacity-40 ` +
              style.gs_image_placeholder
            }
          ></div>
          <div
            className={
              `absolute top-1/2 left-1/2 z-10 w-9/12 translate-x-2/4 translate-y-2/4 text-white ` +
              style.gs_meta
            }
          >
            <span className="text-xs font-bold uppercase">
              Front-end / 5 min read
            </span>
            <h2 className="my-2.5 text-4xl font-bold uppercase">
              Lorem ipsum dolor.
            </h2>
            <p className="text-xl italic">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <Link href="api/hello">
            <a className='absolute w-full h-full left-0 top-0 block z-20'></a>
          </Link>
        </article>
        <article
          className={
            `group relative mb-1 overflow-hidden text-center ` +
            `${style.gs_article}`
          }
        >
          <div
            style={{
              backgroundImage: "url('https://picsum.photos/id/236/800/500')",
            }}
            className={
              `absolute top-0 left-0 right-0 bottom-0 h-full w-full bg-cover bg-center opacity-80 transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:opacity-40 ` +
              style.gs_image_placeholder
            }
          ></div>
          <div
            className={
              `absolute top-1/2 left-1/2 z-10 w-9/12 translate-x-2/4 translate-y-2/4 text-white ` +
              style.gs_meta
            }
          >
            <span className="text-xs font-bold uppercase">
              Front-end / 5 min read
            </span>
            <h2 className="my-2.5 text-4xl font-bold uppercase">
              Lorem ipsum dolor.
            </h2>
            <p className="text-xl italic">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <Link href="api/hello">
            <a className='absolute w-full h-full left-0 top-0 block z-20'></a>
          </Link>
        </article>

        <article
          className={
            `group relative mb-1 overflow-hidden text-center ` +
            `${style.gs_article}`
          }
        >
          <div
            style={{
              backgroundImage: "url('https://picsum.photos/id/235/900/500')",
            }}
            className={
              `absolute top-0 left-0 right-0 bottom-0 h-full w-full bg-cover bg-center opacity-80 transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:opacity-40 ` +
              style.gs_image_placeholder
            }
          ></div>
          <div
            className={
              `absolute top-1/2 left-1/2 z-10 w-9/12 translate-x-2/4 translate-y-2/4 text-white ` +
              style.gs_meta
            }
          >
            <span className="text-xs font-bold uppercase">
              Front-end / 5 min read
            </span>
            <h2 className="my-2.5 text-4xl font-bold uppercase">
              Lorem ipsum dolor.
            </h2>
            <p className="text-xl italic">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <Link href="api/hello">
            <a className='absolute w-full h-full left-0 top-0 block z-20'></a>
          </Link>
        </article>
      </main>
      <section className="my-16 text-center">
        <button className="group relative w-1/3 border-2 border-black font-bold uppercase transition-transform duration-200 ease-in hover:scale-105">
          <span className="absolute inset-0 bg-black transition-transform duration-300 ease-in group-hover:scale-x-105 group-hover:scale-y-150"></span>
          <div className="relative bg-white py-3">Load more</div>
        </button>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const { data: posts } = await client.query({
    query: gql`
      query {
        postsConnection {
          edges {
            node {
              author {
                bio
                name
                id
              }
              createdAt
              slug
              title
              excerp
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
    `,
  })

  return {
    props: {
      posts,
    },
  }
}

export default Home
