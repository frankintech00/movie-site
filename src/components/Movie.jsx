import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-1-696x1024.jpg";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="p-5 pl-25 pr-25 m-auto max-w-25">
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <p>({movie.Year})</p>
    </div>
  );
};

export default Movie;
