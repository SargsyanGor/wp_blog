import React, { useEffect, useRef, useState } from 'react'
import style from '../styles/pages/about.module.scss'
import { NextPage } from 'next'
import { Checkmark, Down } from 'grommet-icons'
import Head from 'next/head'

const About: NextPage = () => {
  const [firstRenderComplete, setFirstRenderComplete] = useState(false)
  const mainContentContainer = useRef(null)

  useEffect(() => {
    setFirstRenderComplete(true)

    // Get all the elements you want to show on scroll
    const targets = document.querySelectorAll('.gs_show_on_scroll')
    // Callback for IntersectionObserver
    const callback = function (entries: any) {
      entries.forEach((entry: any) => {
        // Is the element in the viewport?
        if (entry.isIntersecting) {
          // Add the fadeIn class:
          entry.target.classList.add('motion-safe:animate-fadeIn')
        }
      })
    }
    // Set up a new observer
    const observer = new IntersectionObserver(callback)

    // Loop through each of the target
    targets.forEach(function (target) {
      // Hide the element
      target.classList.add('opacity-0')

      // Add the element to the watcher
      observer.observe(target)
    })
  }, [])

  const handleClick = () => {
    window.scrollTo({
      // @ts-ignore
      top: mainContentContainer.current.offsetTop,
      behavior: 'smooth',
    })
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
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Whitepaper-ի հեղինակի մասին" />

        <meta
          property="og:description"
          content="Ես Գոռն եմ՝ մասնագիտությամբ Front-end ծրագրավորող: Հանդիսանում եմ
          Whitepaper-ի հիմնադիրն ու համահեղինակը:"
        />
        <meta property="og:url" content="https://www.whitepaper.am/about" />
        <meta property="og:image" content="https://www.whitepaper.am/me.jpg" />
        <link rel="canonical" href="https://www.whitepaper.am/about" />
        <title>Whitepaper-ի հեղինակի մասին</title>
        <meta
          name="description"
          content="Ես Գոռն եմ՝ մասնագիտությամբ Front-end ծրագրավորող: Հանդիսանում եմ
          Whitepaper-ի հիմնադիրն ու համահեղինակը:"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`relative bg-black ` + style.gs_primary_image_wrapper}>
        <div
          style={{
            backgroundImage: 'url(/olena.jpg)',
          }}
          className={`${
            firstRenderComplete ? 'opacity-80' : 'opacity-0'
          } absolute top-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in lg:bg-fixed`}
        />
        <div className="text-center">
          <button
            onClick={handleClick}
            className="absolute bottom-14 duration-300 hover:bottom-12"
          >
            <Down size="35px" color="white"></Down>
          </button>
        </div>
      </div>
      <div
        className="container mx-auto px-10 py-20 sm:w-1/2 sm:px-0"
        ref={mainContentContainer}
      >
        <div className="mb-20 text-center">
          <img
            className="mx-auto h-72 w-72 rounded-full object-cover"
            src="/me.jpg"
            alt="The Whitepaper author"
          />
        </div>
        <p className="gs_show_on_scroll mb-12 text-2xl font-bold text-amber-500">
          Ողջույն!
        </p>
        <p className="gs_show_on_scroll mb-10">
          Ես Գոռն եմ: Հանդիսանում եմ
          Whitepaper-ի հիմնադիրը և միակ խմբագիրը :)
        </p>

        <p className="gs_show_on_scroll mb-10">
          The WhitePaper-ը անձնական բլոգ է՝ համեմված մինիմալիզմի, կյանքն ավելի առողջ ու գիտակից
          ապրելու մասին հոդվածներով:
        </p>

        {/*<p className="gs_show_on_scroll mb-10">*/}
        {/*  Պետք է նշեմ, որ շատ դժվարա որակյալ կոնտենտ ստեղծելը ու կխնդրեմ*/}
        {/*  խիստ չդատես՝ քերականական կամ իմաստային սխալների համար :)*/}
        {/*</p>*/}

        <div className="mb-10">
          <p className="gs_show_on_scroll mb-5">Մի քանի փաստ իմ մասին</p>
          <ul>
            <li className="gs_show_on_scroll mb-2 flex items-center text-sm italic">
              <Checkmark color="orange" size="small" />
              <span className="ml-3">
                Ինձ համար սպիտակ գույնը խորհրդանշումա՝ ամենօրյա սկիզբ,
                պարզություն
              </span>
            </li>
            <li className="gs_show_on_scroll mb-2 flex items-center text-sm italic">
              <Checkmark color="red" size="small" />
              <span className="ml-3">
                {' '}
                Ունեմ մոպս զեղատեսակի շուն՝ Գուչի անունով
              </span>
            </li>
            <li className="gs_show_on_scroll mb-2 flex items-center text-sm italic">
              <Checkmark color="blue" size="small" />
              <span className="ml-3">
                {' '}
                Երեկոները սիրում եմ վարել մեքենա՝ առանց կոնկրետ ուղղության
              </span>
            </li>
            <li className="gs_show_on_scroll mb-2 flex items-center text-sm italic">
              <Checkmark color="green" size="small" />
              <span className="ml-3">Չեմ սիրում կենցաղային անկապ հարցեր</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default About