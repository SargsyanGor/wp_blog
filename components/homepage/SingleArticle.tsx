import Link from 'next/link'
import style from './single_article.module.scss'
import moment from 'moment'

interface Props {
  post: {
    author: {
      bio: string
      name: string
      id: string
      photo: {
        url: string
      }
    }
    content: {
      text: string
    }
    createdAt: string
    slug: string
    title: string
    excerp: string
    featuredImage: {
      url: string
    }
    categories: [
      {
        name: string
        slug: string
      }
    ]
  }
  bigArticle: Boolean
}

const SingleArticle = ({ post, bigArticle }: Props) => {
  return (
    <article
      className={
        `${
          bigArticle ? style.gs_article_big : ' '
        } gs_temporary-bounce group relative mb-1 animate-bounce overflow-hidden text-center ` +
        `${style.gs_article}`
      }
    >
      <div
        style={{
          backgroundImage: 'url(' + post.featuredImage.url + ')',
        }}
        className={
          `absolute top-0 left-0 right-0 bottom-0 h-full w-full bg-cover bg-center opacity-70 transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:opacity-40 ` +
          style.gs_image_placeholder
        }
      ></div>
      <div
        className={
          `absolute top-1/2 left-1/2 z-10 w-9/12 translate-x-2/4 translate-y-2/4 text-white ` +
          style.gs_meta
        }
      >
        <span className="text-xs font-bold text-amber-500 2xl:text-lg gs_text_shadow">
          {/*{post.categories[0].name} /{' '}*/}
          {(post.content.text.length / 200).toFixed()} րոպե կարդալու համար
        </span>
        <h2 className="my-2.5 text-xl font-bold uppercase lg:text-2xl gs_text_shadow">
          {post.title}
        </h2>
        <p className="italic text-sm md:text-base lg:text-xl gs_text_shadow">{post.excerp}</p>
        <p className="mt-5 text-xs">
          {moment(post.createdAt).format('DD. MM. YYYY')}
        </p>
      </div>
      <Link href={`/post/${post.slug}`}>
        <a className="absolute left-0 top-0 z-20 block h-full w-full"></a>
      </Link>
    </article>
  )
}

export default SingleArticle
