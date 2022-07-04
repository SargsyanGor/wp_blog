import { GraphQLClient, gql } from "graphql-request";
const graphcms = new GraphQLClient('https://api-eu-central-1.graphcms.com/v2/cl3cz5se61g5k01xn8gmo0g46/master');



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
              id,
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
  `;

  const results = await graphcms.request(query);
  return results.postsConnection.edges;
}






// GET POSTS -> USED IN HOMEPAGE -> LOAD MORE
export async function getPosts(lastPostCursorValue) {

  const query = gql`
    query MyPosts($after: String){
      postsConnection(orderBy: createdAt_DESC, first: 3, after: $after) {
        edges {
          node {
            author {
              bio
              name
              id,
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
  `;

  const variables = {
    after: lastPostCursorValue,
  }

  const results = await graphcms.request(query, variables);
  return results.postsConnection;
}







// GET SINGLE POST WITH SLUG
export async function getPostDetails(slug) {

  const query = gql`
    query MyPost($slug: String!){
      post(where: { slug: $slug }) {
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
        content {
          raw
        }
      }
    }
  `;

  const variables = {
    slug: slug,
  }

  const results = await graphcms.request(query, variables);
  return results.post;
}