import {useEffect, useState} from "react";
import axios from "axios";
import { useParams} from "react-router-dom";
import "./movieDetails.css"

const MovieDetails = () => {

    const [movieDetails, setMovieDetails] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const movieAPI = `https://api.themoviedb.org/3/movie/${id}?api_key=0917a0555a7428f0ba47d8fcb4ba25b3`

    const getData = () => {
        axios
            .get(movieAPI)
            .then(res => {
                setMovieDetails(res.data)
            })
    }

    return (
        <div className="movie-container">
            <div className="movie-wrapper">
                 <img className="movie-backdrop" src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`} />
                 <div className="left-side">
                 <img className="movie-poster" src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`} />
                 <div className="movie-details">
                    <h3 className="movie-title">{movieDetails.title}</h3>
                    <div className="trailer-wrapper">
                    <button className="trailer-btn"><i className="fa-solid fa-video"></i> Trailer</button>
                    <p className="raiting">IMDB: {movieDetails.vote_average}</p>
                    </div>
                    <p className="movie-description">{movieDetails.overview}</p>
                    <h5 className="release">Released: <span>{movieDetails.release_date}</span></h5>
                 </div>
                 </div>
            </div>
        </div>
        )
}

export default MovieDetails