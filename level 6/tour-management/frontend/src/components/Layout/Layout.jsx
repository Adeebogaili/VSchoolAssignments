import React, { Component } from 'react'

// Components 
import Header from './../Header/Header'
import Routers from '../../router/Routers'
import Footer from './../Footer/Footer'

const Layout = () => {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  )
}

export default Layout