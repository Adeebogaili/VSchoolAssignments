import React from 'react'
import "./homeTrendingMovies.css"
import { Link } from 'react-router-dom'

const HomeTrendingTV = ({tv, id, title, poster}) => {
  return (
    <Link to={`/tvdetails/${id}`} style={{ textDecoration: "none", color: "white" }}>

        <div className="movie-item">
        <img src={`https://image.tmdb.org/t/p/original${tv && poster}`} alt={title}/>
            <div className="details">
                <h3>{title}</h3>
            </div>
        </div>
        </Link>
  )
}

export default HomeTrendingTV