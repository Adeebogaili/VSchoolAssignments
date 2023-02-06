import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function NavBar() {

  const {color, toggleTheme} = useContext(ThemeContext)

  return (
    <nav className={`${color}-theme`}>
      <div className="brand-wrapper">
        {color === "Dark" ? <i className="fa-brands fa-earlybirds"></i> : <i className="fa-solid fa-frog"></i>}
      <h3 className='brand-name-1'><span>U</span>gly</h3>
      <h3 className='brand-name-2'><span>A</span>nimals</h3>
      </div>
      <div className='theme-toggle'>
      <button onClick={toggleTheme}>{color === "Light" ? <i className="fa-regular fa-moon"></i> : <i className="fa-regular fa-sun"></i>}{color === "Light" ? "Dark" : "Light"} mode</button>
      </div>
    </nav>
  )
}

export default NavBar