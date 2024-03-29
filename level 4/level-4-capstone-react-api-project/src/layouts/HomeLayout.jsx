import { useState, useEffect } from "react"
import axios from "axios"
import "./homeLayout.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { NavLink, Outlet } from "react-router-dom"
import { Carousel } from 'react-responsive-carousel'
import CarouselMovie from "../pages/components/CarouselMovie"


const HomeLayout = () => {

    const [carousel, setCarousel] = useState([])
    const [trendingMovies, setTrendingMovies] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const movieAPI = "https://api.themoviedb.org/3/movie/popular?api_key=0917a0555a7428f0ba47d8fcb4ba25b3"

    const getData = () => {
        axios
            .get(movieAPI)
            .then(res => setCarousel(res.data.results))
    }

    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {carousel.map(movie => {
                        return (
                            <CarouselMovie
                                key={movie.id}
                                movie={movie}
                                id={movie.id}
                                backDrop={movie.backdrop_path}
                                title={movie.original_title}
                                releaseDate={movie.release_date}
                                averageVote={movie.vote_average}
                                description={movie.overview}
                            />
                        )
                    })}

                </Carousel>

                <div className="main-container">
                    <p>FMovies is The Best Site To Watch Movies Online - Want Free movies and TV shows with HD resolution and Fast streaming speed? Fmovies has got them all!</p>

                    <div className="main-header">
                        <h3 className="main-title">TRENDING</h3>
                        <nav>
                            <ul>
                                <li className="nav-item" >
                                    <NavLink to="">
                                        <i className="fa-solid fa-circle-play"> Movies</i>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="trending-tv">
                                        <i className="fa-solid fa-tv"> TV Shows</i>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <Outlet />

                </div>
            </div>
        </>
    )
}

export default HomeLayout