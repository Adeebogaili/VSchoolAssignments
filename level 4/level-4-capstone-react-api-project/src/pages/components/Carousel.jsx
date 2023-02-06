import React from 'react'
import { Link } from 'react-router-dom'

const Carousel = ({movie, id, title,backDrop, releaseDate, averageVote, description}) => {
  return (
    <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${id}`}>
      <div className='poster-image'>
        <img src={`https://image.tmdb.org/t/p/original${movie && backDrop}`} />
      </div>
      <div className="posterImage-overlay">
        <div className="posterImage-title">{movie ? title : ""}</div>
        <div className="posterImage-runtime">
          {movie ? releaseDate : ""}
          <span className="posterImage-rating">
            {movie ? averageVote : ""}
            <i className="fas fa-star" />{""}
          </span>
        </div>
        <div className="posterImage-description">{movie ? description : ""}</div>
      </div>
    </Link>
  )
}

export default Carousel
