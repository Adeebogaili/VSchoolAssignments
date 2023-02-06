import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Footer() {

  const {color} = useContext(ThemeContext)

  const year = new Date().getFullYear();

  return (
    <footer className={`${color}-theme`}>
      <p>Copyright ⓒ {year} All rights reserved | This app was made by <span>Adeeb Ogaili</span></p>
    </footer>
  )
}

export default Footer