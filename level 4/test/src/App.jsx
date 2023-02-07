import React from "react"
import { useState, useEffect } from 'react'
import MoviesContext from "./pages/components/MoviesContext"
import axios from "axios"
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom"

// pages
import NotFound from "./pages/NotFound"
import TrendingMovies from "./pages/home/TrendingMovies"
import TrendingTV from "./pages/home/TrendingTV"
import Movies from "./pages/movies/Movies"
import TVShows from "./pages/tv/TVShows"

// components 
import Carousel from "./pages/components/Carousel"
import HomeTrendingMovies from "./pages/home/HomeTrendingMovies"
import HomeTrendingTV from "./pages/home/HomeTrendingTV"
import Footer from "./pages/components/Footer"
import TopRatedMovies from "./pages/movies/TopRatedMovies"
import TopRatedTV from "./pages/tv/TopRatedTV"
import MovieDetails from "./pages/movieDetails/MovieDetails"
import TVShowDetails from "./pages/tvShowDetails/TVShowDetails"

// layouts
import RootLayout from "./layouts/RootLayout"
import HomeLayout from "./layouts/HomeLayout"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="" element={<HomeLayout />}>
        <Route path="" element={<TrendingMovies />} />
        <Route path="trending-tv" element={<TrendingTV />} />
      </Route>
      <Route path="movies" element={<Movies />} />
      <Route path="moviedetails/:id" element={<MovieDetails />} />
      <Route path="tvdetails/:id" element={<TVShowDetails />} />
      <Route path="tv" element={<TVShows />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {

  const [carousel, setCarousel] = useState([])
  const [trendingMovies, setTrendingMovies] = useState([])
  const [trendingTV, setTrendingTV] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [topRatedTV, setTopRatedTV] = useState([])


  const fetchData = () => {
    const carouselAPI = "https://api.themoviedb.org/3/movie/popular?api_key=0917a0555a7428f0ba47d8fcb4ba25b3"
    const trendingTVAPI = "https://api.themoviedb.org/3/tv/popular?api_key=0917a0555a7428f0ba47d8fcb4ba25b3"
    const topRatedMoviesAPI = "https://api.themoviedb.org/3/movie/top_rated?api_key=0917a0555a7428f0ba47d8fcb4ba25b3"
    const topRatedTVAPI = "https://api.themoviedb.org/3/tv/top_rated?api_key=0917a0555a7428f0ba47d8fcb4ba25b3"

    const getCraousel = axios.get(carouselAPI)
    const getTrendingTV = axios.get(trendingTVAPI)
    const getTopRatedMovies = axios.get(topRatedMoviesAPI)
    const getTopRatedTV = axios.get(topRatedTVAPI)

    axios
      .all([getCraousel, getTrendingTV, getTopRatedMovies, getTopRatedTV])
      .then(axios.spread((...allData) => {
        const carouselData = allData[0].data.results
        const trendingTVData = allData[1].data.results
        const topRatedMoviesData = allData[2].data.results
        const topRatedTVData = allData[3].data.results

        setCarousel(carouselData)
        setTrendingMovies(carouselData)
        setTrendingTV(trendingTVData)
        setTopRatedMovies(topRatedMoviesData)
        setTopRatedTV(topRatedTVData)
      }))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const homeCarousel = carousel.map(movie => {
    return (
      <Carousel
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
  })

  const homeTrendingMovies = trendingMovies.map(movie => {
    return (
      <HomeTrendingMovies
        key={movie.id}
        movie={movie}
        id={movie.id}
        poster={movie.poster_path}
        title={movie.original_title}
        releaseDate={movie.release_date}
        averageVote={movie.vote_average}
        description={movie.overview}
      />
    )
  })

  const homeTrendingTV = trendingTV.map(tv => {
    return (
      <HomeTrendingTV
        key={tv.id}
        tv={tv}
        id={tv.id}
        poster={tv.poster_path}
        title={tv.original_name}
        releaseDate={tv.first_air_date}
        averageVote={tv.vote_average}
        description={tv.overview}
      />
    )
  })

  const topRatedMoviesEl = topRatedMovies.map(movie => {
    return (

      <TopRatedMovies
        key={movie.id}
        movie={movie}
        id={movie.id}
        poster={movie.poster_path}
        title={movie.original_title}
        releaseDate={movie.release_date}
        averageVote={movie.vote_average}
        description={movie.overview}
      />
    )
  })

  const topratedTVEl = topRatedTV.map(tv => {
    return (
      <TopRatedTV
        key={tv.id}
        tv={tv}
        id={tv.id}
        poster={tv.poster_path}
        title={tv.original_name}
        releaseDate={tv.first_air_date}
        averageVote={tv.vote_average}
        description={tv.overview}
      />
    )
  })

  return (
    <MoviesContext.Provider
      value={{
        homeCarousel,
        homeTrendingMovies,
        homeTrendingTV,
        topRatedMoviesEl,
        topratedTVEl
      }}
    >
      <RouterProvider router={router} />
      <Footer />
    </MoviesContext.Provider>
  )
}

export default App
