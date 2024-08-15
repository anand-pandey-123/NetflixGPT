import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  return (
    <div className="py-4   ">
      <h1 className="mb-4 font-bold md:text-2xl px-4">{title}</h1>
      <div className="flex  overflow-x-scroll scrollbar-hide">
        <div className="flex ">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} poster={movie.poster_path}></MovieCard>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
