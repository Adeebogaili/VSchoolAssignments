import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Footer() {

    const {color} = useContext(ThemeContext)
  return (
    <footer className={`${color}`}>The amazing Footer</footer>
  )
}

export default Footer