import Head from "next/head";
import Layout from '../components/layout/Layout'
import type { AppProps } from 'next/app'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
          <Head>
              <title>White paper blog</title>
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </>
  )
}

export default MyApp
