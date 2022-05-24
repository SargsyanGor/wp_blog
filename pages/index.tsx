import type { NextPage } from 'next'
import { gql } from '@apollo/client'
import client from '../services/apolloClient'
import Head from 'next/head'

const Home: NextPage = (posts) => {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
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
