import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext';

function NavBar() {

  const {color} = useContext(ThemeContext)
  return (
    <nav className={`${color}`}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default NavBar;