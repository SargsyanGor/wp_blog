import Layout from '../components/layout/Layout'
import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import React, { useEffect } from 'react'
import Head from "next/head";

function TheWhitePaperApp({ Component, pageProps }: AppProps) {
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
            <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
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
