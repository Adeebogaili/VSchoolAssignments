import React from 'react'
import { useContext } from 'react'
import MoviesContext from '../components/MoviesContext'

const TrendingTV = () => {

  const { homeTrendingTV } = useContext(MoviesContext)
 
    return (
      <div className='trending-movies'>
        {homeTrendingTV}
      </div>
    )
}

export default TrendingTV