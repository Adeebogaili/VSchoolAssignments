import React from 'react'
import { useContext } from 'react'
import MoviesContext from '../components/MoviesContext'
import "./homeTrendingMovies.css"

const TrendingMovies = () => {

  const { homeTrendingMovies } = useContext(MoviesContext)

  return (
    <div className='trending-movies'>
      {homeTrendingMovies}
    </div>
  )
}

export default TrendingMovies