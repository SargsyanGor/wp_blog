import React from 'react'
import { default as Header } from './header/Header'
import { default as Navigation } from './navigation/Navigation'
import { default as Sidebar } from './sidebar/Sidebar'

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
    </>
  )
}

export default Layout
