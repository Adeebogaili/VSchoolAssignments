import React from 'react'
import "./topRatedTV.css"

const TopRatedTV = ({tv, id, title, poster, releaseDate, averageVote, description}) => {
    return (
      <div className="movie-item">
          <img src={`https://image.tmdb.org/t/p/original${tv && poster}`} alt={title}/>
              <div className="details">
                  <h3>{title}</h3>
              </div>
          </div>
  )
}

export default TopRatedTV