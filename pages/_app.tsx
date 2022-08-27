import Layout from '../components/layout/Layout'
import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Script from 'next/script'
import * as ga from '../helpers/google-analytics'

function TheWhitePaperApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageView(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  useEffect(() => {
    const observer = new IntersectionObserver(
      function (entries) {
        // isIntersecting is true when element and viewport are overlapping
        // isIntersecting is false when element and viewport don't overlap
        const sidebarEl = document.getElementById('gs_sidebar')!
        const navigationEl = document.getElementById('gs_navigation')!
        const scrollTopVal =
          window.pageYOffset || document.documentElement.scrollTop
        if (entries[0].isIntersecting) {
          // Freeze Sidebar
          sidebarEl.style.position = 'absolute'
          sidebarEl.style.height = '100vh'
          sidebarEl.style.top = scrollTopVal + 'px'
          // Freeze Navigation
          navigationEl.style.position = 'absolute'
          navigationEl.style.height = '100vh'
          navigationEl.style.top = scrollTopVal + 'px'
        } else {
          // Reset to default
          sidebarEl.style.position = 'fixed'
          sidebarEl.style.height = 'initial'
          sidebarEl.style.top = '0'
          navigationEl.style.position = 'fixed'
          navigationEl.style.height = 'initial'
          navigationEl.style.top = '0'
        }
      },
      { threshold: [0] }
    )

    observer.observe(document.getElementById('gs_footer')!)
  }, [])

  return (
    <>
      <Head>
        <Script
          strategy={'afterInteractive'}
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
        ></Script>
        <Script strategy={'afterInteractive'} id="google-analytics-script">
          {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                
                  gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
            `}
        </Script>
        <title></title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default TheWhitePaperApp
