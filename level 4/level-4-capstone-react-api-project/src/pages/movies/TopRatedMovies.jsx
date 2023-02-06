import React from 'react'
import "./topRatedMovies.css"


const TopRatedMovies = ({movie, id, title, poster, releaseDate, averageVote, description}) => {
    return (
      <div className="movie-item">
          <img src={`https://image.tmdb.org/t/p/original${movie && poster}`} alt={title}/>
              <div className="details">
                  <h3>{title}</h3>
              </div>
          </div>
  )
}

export default TopRatedMovies