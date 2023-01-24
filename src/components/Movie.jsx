import React from "react";

// default image to use if the movie poster is not available
const DEFAULT_PLACEHOLDER_IMAGE =
  "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-1-696x1024.jpg";

// Movie component that takes in a prop "movie" which is an object
const Movie = ({ movie }) => {
  // check if the movie poster is available, if not use the default image
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  return (
    // container element for the movie information
    <div className="text-center">
      <div className="">
        {/* movie title */}
        <h2 className="text-gray-100 text-3xl my-3">{movie.Title}</h2>
        {/* Movie image */}
        <img
          className="w-3/4 h-auto mx-auto"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      {/* movie year */}
      <p className="text-right text-xl text-gray-100 my-1 mr-12">
        ({movie.Year})
      </p>
    </div>
  );
};

export default Movie;
