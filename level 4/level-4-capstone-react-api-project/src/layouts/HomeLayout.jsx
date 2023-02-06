import "./homeLayout.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { NavLink, Outlet } from "react-router-dom"
import { Carousel } from 'react-responsive-carousel'
import MoviesContext from "../pages/components/MoviesContext"
import { useContext } from "react"

const HomeLayout = () => {

    const { homeCarousel } = useContext(MoviesContext)

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
                    {homeCarousel}
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