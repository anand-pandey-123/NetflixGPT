import React, { useEffect } from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

function MainComponent() {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    if(!movies) return null;

    let movieNo = Math.floor(Math.random() * movies.length);
  
    const mainMovie = movies[movieNo];
    const { id, original_title, overview} = mainMovie;
  return (
    <div className='overflow-x-hidden '>
        <div className='relative'>
        <VideoTitle title={original_title} overview={overview}></VideoTitle>
        </div>
        <VideoBackground movieId={id}></VideoBackground>
    </div>
  )
}

export default MainComponent