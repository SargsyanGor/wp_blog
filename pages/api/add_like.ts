/** *************************************************************
 * Any file inside the folder pages/api is mapped to /api/* and  *
 * will be treated as an API endpoint instead of a page.         *
 *************************************************************** */
import { GraphQLClient, gql } from 'graphql-request'

const graphqlAPI: any = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
const graphcmsToken: any = process.env.GRAPHCMS_TOKEN

export default async function add_like(req: any, res: any) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphcmsToken}`,
    },
  })
  const getPostQuery = gql`
    query GetPost($slug: String!) {
      post(where: { slug: $slug }) {
        likes
      }
    }
  `
  const query = gql`
    mutation UpdateLikesCount($slug: String!, $likes: Int!) {
      updatePost(data: { likes: $likes }, where: { slug: $slug }) {
        id
      }
      publishPost(where: { slug: $slug }) {
        likes
      }
    }
  `
  try {
    const response = await graphQLClient.request(getPostQuery, {
      slug: req.body,
    })
    const result = await graphQLClient.request(query, {
      slug: req.body,
      likes: response.post.likes + 1,
    })

    return res.status(200).send(result)
  } catch (error) {
    // @ts-ignore
    return error
  }
}
