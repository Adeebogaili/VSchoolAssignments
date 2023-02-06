import React from 'react'
import NavBar from './components/NavBar'
import Main from './components/Main'
import Footer from './components/Footer'
import { ThemeContextProvider } from './components/ThemeContext'

function App(props) {

  return (
    <div className="container">
      <ThemeContextProvider>
      <NavBar />      
      <Main />      
      <Footer />      
      </ThemeContextProvider>
    </div>
  )
}

export default App
