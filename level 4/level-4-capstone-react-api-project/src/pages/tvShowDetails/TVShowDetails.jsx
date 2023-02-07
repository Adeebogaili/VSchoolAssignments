import {useEffect, useState} from "react";
import axios from "axios";
import { useParams} from "react-router-dom";
import "./tvShowDetails.css"


const TVShowDetails = () => {

    const [tvDetails, setTVDetails] = useState({})

    console.log(tvDetails)


    const { id } = useParams()

    useEffect(() => {
        getData()
    }, [])

    const movieAPI = `https://api.themoviedb.org/3/tv/${id}?api_key=0917a0555a7428f0ba47d8fcb4ba25b3`

    const getData = () => {
        axios
            .get(movieAPI)
            .then(res => setTVDetails(res.data))
    }

    return (
        <div className="movie-container">
            <div className="movie-wrapper">
                 <img className="movie-backdrop" src={`https://image.tmdb.org/t/p/original${tvDetails.backdrop_path}`} />
                 <div className="left-side">
                 <img className="movie-poster" src={`https://image.tmdb.org/t/p/original${tvDetails.poster_path}`} />
                 <div className="movie-details">
                    <h3 className="movie-title">{tvDetails.title}</h3>
                    <div className="trailer-wrapper">
                    <button className="trailer-btn"><i className="fa-solid fa-video"></i> Trailer</button>
                    <p className="raiting">IMDB: {tvDetails.vote_average}</p>
                    </div>
                    <p className="movie-description">{tvDetails.overview}</p>
                    <h5 className="release">Released: <span>{tvDetails.release_date}</span></h5>
                 </div>
                 </div>
            </div>

        </div>
    )
}

export default TVShowDetails