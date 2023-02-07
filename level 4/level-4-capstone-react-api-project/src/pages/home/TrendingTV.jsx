import { useState, useEffect } from 'react'
import axios from 'axios'
import HomeTrendingTV from './HomeTrendingTV'
const TrendingTV = () => {

  const [trendingTV, setTrendingTV] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {

    const trendingTVAPI = "https://api.themoviedb.org/3/tv/popular?api_key=0917a0555a7428f0ba47d8fcb4ba25b3"

    axios
      .get(trendingTVAPI)
      .then(res => setTrendingTV(res.data.results))
  }

  return (
    <div className='trending-movies'>
      {trendingTV.map(tv => {
        return (
          <HomeTrendingTV
            key={tv.id}
            tv={tv}
            id={tv.id}
            poster={tv.poster_path}
            title={tv.original_name}
          />
        )
      })}
    </div>
  )
}

export default TrendingTV