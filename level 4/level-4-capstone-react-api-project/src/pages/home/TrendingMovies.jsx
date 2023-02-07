import { useState, useEffect } from 'react'
import axios from 'axios'
import "./homeTrendingMovies.css"
import HomeTrendingMovies from './HomeTrendingMovies'

const TrendingMovies = () => {

  const [trendingMovies, setTrendingMovies] = useState([])

    useEffect(() => {
      getData()
    }, [])

  const movieAPI = "https://api.themoviedb.org/3/movie/popular?api_key=0917a0555a7428f0ba47d8fcb4ba25b3"

  const getData = () => {
    axios
      .get(movieAPI)
      .then(res => setTrendingMovies(res.data.results))
  }

  return (
    <div className='trending-movies'>
      {trendingMovies.map(movie => {
        return (
          <HomeTrendingMovies
            key={movie.id}
            movie={movie}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.original_title}
          />
        )
      })}
    </div>
  )
}

export default TrendingMovies