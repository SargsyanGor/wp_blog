import React, { useEffect, useRef, useState } from 'react'
import style from '/styles/pages/post_details.module.scss'
import SocialSharing from '../../components/article-details/social-sharing/SocialSharing'
import { Down } from 'grommet-icons'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import Comments from '../../components/article-details/comments/Comments'
import CommentsForm from '../../components/article-details/comments-form/CommentsForm'
import {GetServerSideProps, NextPage} from 'next'
import { getPostDetails } from '../../services'
import { PropTypePost } from '../../types'
import moment from 'moment'
import ReadingIndicator from '../../components/article-details/reading-indicator/ReadingIndicator'
import { useRouter } from 'next/router'
import Loader from '../../components/loader/Loader'
import Head from 'next/head'

const ArticleDetails: NextPage<PropTypePost> = ({ post }: PropTypePost) => {
  const [firstRenderComplete, setFirstRenderComplete] = useState<boolean>(false)
  const articleContainerRef = useRef(null)
  const mainArticleRef = useRef(null)
  const router = useRouter()

  useEffect(() => {
    setFirstRenderComplete(true)
  }, [])

  const makeRecursiveSearch = (obj:any, searchKey:any, results:string[] = []) => {
    const r = results;
    Object.keys(obj).forEach(key => {
      const value = obj[key];
      if(key === searchKey && typeof value !== 'object'){
        r.push(value);
      }else if(typeof value === 'object'){
        makeRecursiveSearch(value, searchKey, r);
      }
    });
    return r;
  };

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
          <h2 key={index} className="mt-16 mb-20 text-2xl font-bold">
            {modifiedText.map((item: any, i: any) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h2>
        )
      case 'heading-three':
        return (
          <h3 key={index} className="text-md mt-16 mb-16 font-semibold">
            {modifiedText.map((item: any, i: any) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        )
      case 'heading-four':
        return (
            <h4 key={index} className="text-md mb-20 text-right font-semibold">
              {modifiedText.map((item: any, i: any) => (
                  <React.Fragment key={i}>{item}</React.Fragment>
              ))}
            </h4>
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
            className="mb-8 object-cover max-w-full"
          />
        )
      case 'block-quote':
        return (
          <blockquote className="mb-10 mt-20" key={index}>
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
      case 'numbered-list':
        const results = obj.children.map((item: any, i: any) => (
            makeRecursiveSearch(item, 'text')
        ))
        return (
            <div className="mb-20" key={index}>
              <ul className='list-decimal pl-12'>
                {results.map((item: string, i: any) => {
                  return <li className='mb-2'>{item}</li>
                })}
              </ul>
            </div>
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
              {/*{post.categories[0].name} /{' '}*/}
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
              firstRenderComplete ? 'opacity-80' : 'opacity-0'
            } absolute top-0 left-0 h-full w-full bg-cover bg-fixed bg-center bg-no-repeat transition-all duration-1000 ease-in`}
          />
          <button
            onClick={handleClick}
            className="absolute bottom-14 duration-300 hover:bottom-12"
          >
            <Down size="35px" color="white"></Down>
          </button>
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

export const getServerSideProps: GetServerSideProps = async ({ params }: any) => {
  const data = (await getPostDetails(params.slug)) || []

  return {
    props: { post: data },
  }
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const posts = await getAllPosts();
//
//   return {
//     // @ts-ignore
//     paths: posts.map(({ node: { slug } }) => ({ params: { slug } })), //indicates that no page needs be created at build time
//     fallback: true, //indicates the type of fallback
//   }
// }
