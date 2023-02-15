import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm";

function Movie({ title, genre, deleteMovie, editMovie, _id }) {
  const [editToggle, setEditToggle] = useState(false);
  return (
    <div className="movie">
      {!editToggle ? (
        <>
          <h1>Title: {title}</h1>
          <p>Genre: {genre}</p>
          <button className="delete-btn" onClick={() => deleteMovie(_id)}>
            Delete
          </button>
          <button
            className="edit-btn"
            onClick={() => setEditToggle((prevToggle) => !prevToggle)}
          >
            Edit
          </button>
        </>
      ) : (
        <>
          <AddMovieForm 
            title={title} 
            genre={genre} 
            btnText="Submit Edit" 
            submit={editMovie}
            _id={_id}
            />
          <button
            onClick={() => setEditToggle((prevToggle) => !prevToggle)}
          >
            Close
          </button>
        </>
      )}
    </div>
  );
}

export default Movie;
