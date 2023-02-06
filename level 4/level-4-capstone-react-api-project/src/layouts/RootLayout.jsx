import {useState} from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./rootLayout.css"

function RootLayout() {

  const [mobile, setMobile] = useState(false)

  return (
    <div>
        <header>
        <div className='container flexSB'>
                <div className='logo flexSB'>
                    <a className='image-link' href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/FMovies_Logo.png" alt="imbd-logo"/></a>
                </div>
            <nav className='flexSB'>
                <ul className={mobile ? "navMenu-list" : 'flexSB'} onClick={() => setMobile(false)}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/movies">Movies</NavLink>
                <NavLink to="/tv">TV Shows</NavLink>
                </ul>
                <button className='toggle' onClick={() => setMobile(prevMobile => !prevMobile)}>
                    {mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                </button>
            </nav>
            <div className="account flexSB">
                <i className='fa fa-search'></i>
                <i className='fa fa-bell'></i>
                <i className='fa fa-user'></i>
            </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
