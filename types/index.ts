interface PostsType {
  node: {
    author: {
      bio: string
      id: string
      name: string
      photo: {
        url: string
      }
    }
    content: {
      text: string
    }
    categories: [
      {
        name: string
        slug: string
      }
    ]
    createdAt: string
    excerp: string
    featuredImage: {
      url: string
    }
    slug: string
    title: string
  }
}

export interface PropTypePosts {
  postsData: {
    aggregate: { count: Number }
    edges: PostsType[]
    pageInfo: { endCursor: String }
  }
}


// ----------------------------------------------

export interface PropTypePost {
  post: {
    [key: string]: any
  }
}
