import { useEffect, useState } from "react";
import axios from "axios";
import AddMovieForm from "./components/AddMovieForm";

// Components Import
import Movie from "./components/Movie";

function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    axios
      .get("/movies")
      .then((res) => setMovies(res.data))
      .catch((err) => console.error(err.response.data.errMsg));
  };

  function addMovie(newMovie) {
    axios
      .post("/movies", newMovie)
      .then((res) => {
        setMovies((prevMovies) => [...prevMovies, res.data]);
      })
      .catch((err) => console.error(err));
  }

  function deleteMovie(movieId) {
    axios
      .delete(`/movies/${movieId}`)
      .then((res) => {
        setMovies((prevMovies) =>
          prevMovies.filter((movie) => movie._id !== movieId)
        );
      })
      .catch((err) => console.error(err));
  }

  function editMovie(updates, movieId) {
    axios
      .put(`/movies/${movieId}`, updates)
      .then((res) => {
        setMovies((prevMovies) =>
          prevMovies.map((movie) => (movie._id !== movieId ? movie : res.data))
        );
      })
      .catch((err) => console.error(err));
  }

  function handleFilter(e) {
    if (e.target.value === "reset") {
      getMovies();
    } else {
      axios
        .get(`/movies/search/genre?genre=${e.target.value}`)
        .then((res) => {
          setMovies(res.data);
        })
        .catch((err) => console.error(err));
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="movie-container">
      <AddMovieForm submit={addMovie} btnText="Add Movie" />

      <h4>Filter by Genre</h4>
      <select onChange={handleFilter} className="filter-form">
        <option value="reset">All Movies</option>
        <option value="action">Action</option>
        <option value="fantasy">Fantasy</option>
        <option value="horror">Horror</option>
      </select>
      {movies.map((movie) => (
        <Movie
          {...movie}
          key={movie._id}
          deleteMovie={deleteMovie}
          editMovie={editMovie}
        />
      ))}
    </div>
  );
}

export default App;
