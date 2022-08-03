import {gql, GraphQLClient} from 'graphql-request'

const graphcms = new GraphQLClient(
    'https://api-eu-central-1.graphcms.com/v2/cl3cz5se61g5k01xn8gmo0g46/master'
)

// ALL POSTS QUERY
export async function getAllPosts() {
  const query = gql`
    query MyAllPosts {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            content {
              text
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
        aggregate {
          count
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  `

  const results = await graphcms.request(query)
  return results.postsConnection.edges
}

// GET POSTS -> USED IN HOMEPAGE -> LOAD MORE
export async function getPosts(lastPostCursorValue) {
  const query = gql`
    query MyPosts($after: String) {
      postsConnection(orderBy: createdAt_DESC, first: 3, after: $after) {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            content {
              text
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
        aggregate {
          count
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  `

  const variables = {
    after: lastPostCursorValue,
  }

  const results = await graphcms.request(query, variables)
  return results.postsConnection
}

// GET SINGLE POST WITH SLUG
export async function getPostDetails(slug) {
  const query = gql`
    query MyPost($slug: String!) {
      post(where: { slug: $slug }) {
        content {
          text
        }
        createdAt
        slug
        title
        excerp
        likes
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
        content {
          raw
        }
      }
    }
  `

  const variables = {
    slug: slug,
  }

  const results = await graphcms.request(query, variables)
  return results.post
}

// SUBMIT COMMENT -> USED IN post/[slug].tsx -> CommentsForm.tsx

export const submitComment = async (obj) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })

  return result.json()
}

// GET COMMENTS -> USED IN post/[slug].tsx -> Comments.tsx

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `

  const results = await graphcms.request(query, { slug })
  return results.comments
}

// ADD NEW LIKE TO SINGLE POST -> USED IN post/[slug].tsx -> Likes.tsx

export const likePost = async (slug) => {
  return await fetch('/api/add_like', {
    method: 'POST',
    headers: {
      'Content-Type': 'text',
    },
    body: slug,
  }).then((res) => {
    if (!res.ok) {
      throw Error('Something went wrong')
    }
    return true
  }).catch((error) => {
    return error
  })
}
