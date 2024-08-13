import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import { removeSearchedMovies } from '../utils/gptMoviesSlice';

function GptShow() {
    const searchedMovie = useSelector((store) => store.gptMovies?.searchedMovies);
    const dispatch = useDispatch();
    console.log(searchedMovie)

    const handleClick = () => {
        dispatch(removeSearchedMovies());
    }
  return (
    <div>
        
        {searchedMovie ? <div className={`h-full mt-72 w-[80%] mx-auto rounded-md p-2 bg-zinc-950`}>
            <div className='flex justify-between mb-4'>
            <h1 className='text-2xl px-5 font-semibold mb-2 text-red-600 '>Here are the Results : </h1>
            <button onClick={handleClick} className='rounded-md h-8 w-8 bg-red-600'>X</button>
            </div>
            <div className='flex overflow-x-scroll scrollbar-hide'>
            <div className='flex '>
            {searchedMovie?.map((movie)=> (movie?.poster_path ? <MovieCard key={movie?.id} poster={movie.poster_path}></MovieCard> : null))}
            </div>
            </div>
        </div> : null}
    </div>
  )
}

export default GptShow;