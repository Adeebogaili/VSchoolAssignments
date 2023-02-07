import React from 'react'
import { useContext } from 'react'
import MoviesContext from '../components/MoviesContext'
import "./topRatedMovies.css"


const Movies = () => {

  const { topRatedMoviesEl } = useContext(MoviesContext)

  return (
    <div className="top-rated-movies">
      <h3 className='page-title'>Top Rated Movies</h3>
      <div className='movies-list'>
      {topRatedMoviesEl}
      </div>
    </div>

  )
}

export default Movies

