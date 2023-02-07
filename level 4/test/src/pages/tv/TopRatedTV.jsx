import React from 'react'
import { Link } from 'react-router-dom'
import "./topRatedTV.css"

const TopRatedTV = ({ tv, id, title, poster, releaseDate, averageVote, description }) => {
    return (
        <Link to={`/tvdetails/${id}`} style={{ textDecoration: "none", color: "white" }}>

            <div className="movie-item">
                <img src={`https://image.tmdb.org/t/p/original${tv && poster}`} alt={title} />
                <div className="details">
                    <h3>{title}</h3>
                </div>
            </div>
        </Link>
    )
}

export default TopRatedTV