import React, { useEffect, useRef } from 'react'
import style from '/styles/pages/article_details.module.scss'
import SocialSharing from '../../components/article-details/social-sharing/SocialSharing'
import { Down } from 'grommet-icons'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import Comments from '../../components/article-details/comments/Comments'
import Likes from '../../components/article-details/likes/Likes'
import CommentsForm from '../../components/article-details/comments-form/CommentsForm'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getPostDetails, getAllPosts } from '../../services'
import { PropTypePost } from '../../types'
import moment from 'moment'
import ReadingIndicator from "../../components/article-details/reading-indicator/ReadingIndicator";

const ArticleDetails: NextPage<PropTypePost> = ({ post }: PropTypePost) => {
  console.log(post)
  const articleContainerRef = useRef(null)
  const mainArticleRef = useRef(null)

  const getContentFragment = (index: any, text: any, obj: any, type?: any) => {
    let modifiedText = text

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>
      }
    }

    switch (type) {
      case 'heading-two':
        return (
          <h2 key={index} className="mb-8 text-2xl font-bold">
            {modifiedText.map((item: any, i: any) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h2>
        )
      case 'heading-three':
        return (
          <h3 key={index} className="text-md mb-8 font-semibold">
            {modifiedText.map((item: any, i: any) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        )
      case 'paragraph':
        return (
          <p key={index} className="mb-10">
            {modifiedText.map((item: any, i: any) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        )
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
            className="mb-8 h-80 w-full object-cover"
          />
        )
      case 'block-quote':
        return (
          <blockquote className="mb-16" key={index}>
            <div className="h-3 text-left text-5xl leading-tight text-amber-500">
              “
            </div>
            <p className="px-5 text-center text-sm font-bold text-gray-600">
              {modifiedText.map((item: any, i: any) => (
                <React.Fragment key={i}>{item}</React.Fragment>
              ))}
            </p>
            <div className="-mt-3 h-3 text-right text-5xl leading-tight text-amber-500">
              ”
            </div>
          </blockquote>
        )
      case 'code-block':
        return (
          <div className="mb-10" key={index}>
            <SyntaxHighlighter language="javascript" style={docco}>
              {modifiedText[0]}
            </SyntaxHighlighter>
          </div>
        )
      default:
        return modifiedText
    }
  }
  const handleClick = () => {
    window.scrollTo({
      // @ts-ignore
      top: articleContainerRef.current.offsetTop,
      behavior: 'smooth',
    })
  }
  return (
    <main className="relative">
      <ReadingIndicator target={mainArticleRef}/>
      <div
        className={
          `relative flex items-center justify-center bg-black ` +
          style.gs_primary_image_wrapper
        }
      >
        <div className="relative z-50 px-14 text-center text-white">
          <span className="text-xs font-bold text-amber-500">
            {post.categories[0].name} /{' '}
            {(post.content.text.length / 200).toFixed()} րոպե կարդալու համար
          </span>
          <h2 className="my-2.5 text-4xl font-bold uppercase">{post.title}</h2>
          <p className="text-xl italic">{post.excerp}</p>
        </div>
        <div
          style={{
            backgroundImage: 'url(' + post.featuredImage.url + ')',
          }}
          className="absolute top-0 left-0 h-full w-full bg-cover bg-fixed bg-no-repeat opacity-60"
        />
        <button
          onClick={handleClick}
          className="absolute bottom-14 duration-300 hover:bottom-12"
        >
          <Down size="35px" color="white"></Down>
        </button>
        <div className="absolute right-12 bottom-12">
          <Likes theme="light" />
        </div>
      </div>
      <div className="container mx-auto mt-20 w-1/2" ref={articleContainerRef}>
        <SocialSharing />
        <article ref={mainArticleRef}>
          {post.content.raw.children.map((typeObj: any, index: Number) => {
            const children = typeObj.children.map(
                (item: any, itemIndex: Number) =>
                    getContentFragment(itemIndex, item.text, item)
            )
            return getContentFragment(index, children, typeObj, typeObj.type)
          })}
        </article>
        <SocialSharing />
        <div className="mt-32 flex items-center justify-center">
          <Likes theme="dark" />
        </div>
        <div className="mt-10 border-b-2 border-b-black pb-20 text-center">
          <div className="inline-flex items-center">
            <img
              className="mr-4 h-10 w-10 rounded-full border border-gray-100 object-cover"
              src="https://picsum.photos/id/870/2000/760"
              alt=""
            />
            <div className="text-left">
              <p className="text-sm">Հեղինակ՝ Գոռ Սարգսյան</p>
              <p className="text-xs">
                {moment(post.createdAt).format('DD. MM. YYYY')}
              </p>
            </div>
          </div>
        </div>
        <section className="my-20">
          <h2 className="mb-16 text-center text-2xl font-bold">
            Մեկնաբանություններ(4)
          </h2>
          <Comments />
          <h2 className="mb-14 text-center text-2xl font-bold">
            Թողնել մեկնաբանություն
          </h2>
          <p className="mb-8 text-xs text-xs text-gray-500">
            Ձեր մեյլի հասցեն չի հրապարակվի մեկնաբանություններ բաժնում*
          </p>
          <CommentsForm />
        </section>
      </div>
    </main>
  )
}

export default ArticleDetails

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const data = (await getPostDetails(params.slug)) || []

  return {
    props: { post: data },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts()
  return {
    // @ts-ignore
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })), //indicates that no page needs be created at build time
    fallback: false, //indicates the type of fallback
  }
}
