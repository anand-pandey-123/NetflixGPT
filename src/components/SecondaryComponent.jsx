import React, { useEffect } from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function SecondaryComponent() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store)=> store.movies ?. popularMovies)
  const TopRatedMovies = useSelector((store)=> store.movies ?. TopRatedMovies)
  return (
    <div className='w-full h-full bg-zinc-950 absolute'>
      <div className='-mt-80 '>
        <MovieList title={"Now Playing"} movies={movies}></MovieList>
        <MovieList title={"Popular"} movies={popularMovies}></MovieList>
        <MovieList title={"Top Rated Movies"} movies={TopRatedMovies}></MovieList>
        <MovieList title={"Horror"} movies={movies}></MovieList>
        <MovieList title={"Thriller"} movies={movies}></MovieList>

      </div>
      
    </div>
  )
}

export default SecondaryComponent