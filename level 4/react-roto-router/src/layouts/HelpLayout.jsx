import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

function HelpLayout() {
  return (
    <div className="help-layout">
        <h2>Website Help</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, harum?</p>
        
        <nav>
            <NavLink to="faq">View the FAQ</NavLink>
            <NavLink to="contact">Contact Us</NavLink>
        </nav>
        <Outlet />
    </div>

  )
}

export default HelpLayout