import Layout from '../components/layout/Layout'
import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import React, { useEffect } from 'react'
import Head from "next/head";

function TheWhitePaperApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // used to keep user data about liked posts
    if (localStorage.getItem('likedArticlesList') === null) {
      localStorage.setItem('likedArticlesList', JSON.stringify([]))
    }

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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default TheWhitePaperApp
