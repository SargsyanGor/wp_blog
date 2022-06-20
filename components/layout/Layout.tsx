import React from 'react'
import { default as Header } from './header/Header'
import { default as Navigation } from './navigation/Navigation'
import { default as Sidebar } from './sidebar/Sidebar'
import Footer from './footer/Footer'

type Props = {
  children?: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Sidebar />
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

export default Layout
