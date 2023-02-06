import React from 'react'
import { useContext } from 'react'
import MoviesContext from '../components/MoviesContext'
import "./topRatedTV.css"

const TVShows = () => {

  const { topratedTVEl } = useContext(MoviesContext)
  return (
    <div className="top-rated-movies">
      <h3 className='page-title'>Top Rated TV Shows</h3>
      <div className='movies-list'>
      {topratedTVEl}
      </div>
    </div>
  )
}

export default TVShows