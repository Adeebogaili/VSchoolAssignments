import { useState } from 'react'
import { ThemeContextProvider } from './components/ThemeContext' 
import NavBar from './components/NavBar'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

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
