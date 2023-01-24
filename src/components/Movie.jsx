import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-1-696x1024.jpg";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="text-center">
      <div className="">
        <h2 className="text-gray-100 text-3xl my-3">{movie.Title}</h2>
        <img
          className="w-3/4 h-auto mx-auto"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <p className="text-right text-xl text-gray-100 my-1 mr-12">
        ({movie.Year})
      </p>
    </div>
  );
};

export default Movie;
