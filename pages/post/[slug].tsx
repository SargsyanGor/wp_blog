import React, { useEffect, useRef, useState } from 'react'
import style from '/styles/pages/post_details.module.scss'
import SocialSharing from '../../components/article-details/social-sharing/SocialSharing'
import { Down } from 'grommet-icons'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import Comments from '../../components/article-details/comments/Comments'
import Likes from '../../components/article-details/likes/Likes'
import CommentsForm from '../../components/article-details/comments-form/CommentsForm'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getAllPosts, getPostDetails } from '../../services'
import { PropTypePost } from '../../types'
import moment from 'moment'
import ReadingIndicator from '../../components/article-details/reading-indicator/ReadingIndicator'
import { useRouter } from 'next/router'
import Loader from '../../components/loader/Loader'
import Head from 'next/head'

const ArticleDetails: NextPage<PropTypePost> = ({ post }: PropTypePost) => {
  const [firstRenderComplete, setFirstRenderComplete] = useState<boolean>(false)
  const [postLikes, setPostLikes] = useState<number>(0);
  const [alreadyLikedArticles, setAlreadyLikedArticles] = useState<string[]>([])
  const articleContainerRef = useRef(null)
  const mainArticleRef = useRef(null)
  const router = useRouter()

  useEffect(() => {
    setFirstRenderComplete(true)
    setPostLikes(post.likes)
    const likedArticlesListLocalStorageData = JSON.parse(
      localStorage.getItem('likedArticlesList') || '[]'
    )

    setAlreadyLikedArticles(likedArticlesListLocalStorageData)
  }, [])

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
  const updateLikedArticlesData = () => {
    setAlreadyLikedArticles((state) => [...state, post.slug])
    const likedArticlesListLocalStorageData = JSON.parse(
      localStorage.getItem('likedArticlesList') || '[]'
    )
    likedArticlesListLocalStorageData.push(post.slug)
    // const updatedLikedArticlesObj = likedArticlesListLocalStorageData.push(post.slug)
    localStorage.setItem(
      'likedArticlesList',
      JSON.stringify(likedArticlesListLocalStorageData)
    )
  }
  const incrementLikes = () => {
    setPostLikes(postLikes + 1)
    updateLikedArticlesData()
  }

  if (router.isFallback) {
    return <Loader />
  }

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={post.title}
        />

        <meta
          property="og:description"
          content={post.excerp}
        />
        <meta property="og:url" content={`https://www.whitepaper.am/post/${post.slug}`} />
        <meta
          property="og:image"
          content={post.featuredImage.url}
        />
        <link rel="canonical" href={`https://www.whitepaper.am/post/${post.slug}`} />
        <title>{post.title}</title>
        <meta
          name="description"
          content={post.excerp}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative">
        <ReadingIndicator target={mainArticleRef} />
        <div
          className={
            `relative flex items-center justify-center bg-black ` +
            style.gs_primary_image_wrapper
          }
        >
          <div className="relative z-50 px-14 text-center text-white">
            <span className="text-xxs font-bold text-amber-500 sm:text-xs">
              {post.categories[0].name} /{' '}
              {(post.content.text.length / 200).toFixed()} րոպե կարդալու համար
            </span>
            <h1 className="my-2.5 text-2xl font-bold uppercase sm:text-3xl md:text-5xl 2xl:text-7xl">
              {post.title}
            </h1>
            <p className="text-base italic sm:text-xl">{post.excerp}</p>
          </div>
          <div
            style={{
              backgroundImage: 'url(' + post.featuredImage.url + ')',
            }}
            className={`${
              firstRenderComplete ? 'opacity-60' : 'opacity-0'
            } absolute top-0 left-0 h-full w-full bg-cover bg-fixed bg-center bg-no-repeat transition-all duration-1000 ease-in`}
          />
          <button
            onClick={handleClick}
            className="absolute bottom-14 duration-300 hover:bottom-12"
          >
            <Down size="35px" color="white"></Down>
          </button>
          <div className="absolute right-8 bottom-12 sm:right-12">
            <Likes
              likes={postLikes}
              slug={post.slug}
              theme="light"
              incrementLikes={incrementLikes}
              alreadyLikedArticlesList={alreadyLikedArticles}
            />
          </div>
        </div>
        <div
          className="container mx-auto mt-20 px-10 sm:w-1/2 sm:px-0"
          ref={articleContainerRef}
        >
          <SocialSharing slug={post.slug} />
          <article ref={mainArticleRef}>
            {post.content.raw.children.map((typeObj: any, index: Number) => {
              const children = typeObj.children.map(
                (item: any, itemIndex: Number) =>
                  getContentFragment(itemIndex, item.text, item)
              )
              return getContentFragment(index, children, typeObj, typeObj.type)
            })}
          </article>
          <SocialSharing slug={post.slug} />
          <div className="mt-32 flex items-center justify-center">
            <Likes
              likes={postLikes}
              slug={post.slug}
              theme="dark"
              incrementLikes={incrementLikes}
              alreadyLikedArticlesList={alreadyLikedArticles}
            />
          </div>
          <div className="mt-10 border-b-2 border-b-black pb-20 text-center">
            <div className="inline-flex items-center">
              <img
                className="mr-4 h-20 w-20 rounded-full border border-gray-100 object-cover"
                src="/me.jpg"
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
            <Comments slug={post.slug} />
            <p className="mb-14 text-center text-lg font-bold sm:text-2xl">
              Թողնել մեկնաբանություն
            </p>
            <p className="mb-8 text-xs text-gray-500">
              Ձեր մեյլի հասցեն չի հրապարակվի մեկնաբանություններ բաժնում*
            </p>
            <CommentsForm slug={post.slug} />
          </section>
        </div>
      </main>
    </>
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
  const posts = await getAllPosts();

  return {
    // @ts-ignore
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })), //indicates that no page needs be created at build time
    fallback: true, //indicates the type of fallback
  }
}
