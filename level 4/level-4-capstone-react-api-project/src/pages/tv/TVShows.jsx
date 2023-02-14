import { useState, useEffect } from 'react'
import axios from 'axios'
import TopRatedTV from './TopRatedTV'
import "./topRatedTV.css"

const TVShows = () => {

  const [topRatedTV, setTopRatedTV] = useState([])

  console.log(topRatedTV)

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    const topRatedTVAPI = "https://api.themoviedb.org/3/tv/top_rated?api_key=0917a0555a7428f0ba47d8fcb4ba25b3"

    axios
      .get(topRatedTVAPI)
      .then(res => setTopRatedTV(res.data.results))
  }

  return (
    <div className="top-rated-movies">
      <h3 className='page-title'>Top Rated TV Shows</h3>
      <div className='movies-list'>
        {topRatedTV.map(tv => {
          return (
            <TopRatedTV
              key={tv.id}
              tv={tv}
              id={tv.id}
              poster={tv.poster_path}
              title={tv.original_name}
            />
          )
        })}
      </div>
    </div>
  )
}

export default TVShows