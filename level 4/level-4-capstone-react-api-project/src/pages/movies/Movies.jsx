import { useState, useEffect } from 'react'
import axios from 'axios'
import TopRatedMovies from './TopRatedMovies'
import "./topRatedMovies.css"

const Movies = () => {

  const [topRatedMovies, setTopRatedMovies] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    const topRatedMoviesAPI = "https://api.themoviedb.org/3/movie/top_rated?api_key=0917a0555a7428f0ba47d8fcb4ba25b3"
    axios
      .get(topRatedMoviesAPI)
      .then(res => setTopRatedMovies(res.data.results))
  }

  return (
    <div className="top-rated-movies">
      <h3 className='page-title'>Top Rated Movies</h3>
      <div className='movies-list'>
        {topRatedMovies.map(movie => {
          return (
            <TopRatedMovies
              key={movie.id}
              movie={movie}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.original_title}
            />
          )
        })}
      </div>
    </div>

  )
}

export default Movies

