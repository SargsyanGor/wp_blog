import { GraphQLClient, gql } from "graphql-request";
const graphcms = new GraphQLClient('https://api-eu-central-1.graphcms.com/v2/cl3cz5se61g5k01xn8gmo0g46/master');

export async function getAllPosts() {
  const query = gql`
    query MyPosts{
      postsConnection(orderBy: createdAt_DESC) {
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
      }
    }
  `;

  const results = await graphcms.request(query);
  return results.postsConnection.edges;
}
