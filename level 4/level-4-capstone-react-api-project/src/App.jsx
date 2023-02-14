import React from "react"
import MoviesContext from "./pages/components/MoviesContext"
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
import Footer from "./pages/components/Footer"
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

  return (
    <MoviesContext.Provider value={{}}>
      <RouterProvider router={router} />
      <Footer />
    </MoviesContext.Provider>
  )
}

export default App
