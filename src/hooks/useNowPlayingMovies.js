import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = ()=>{
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies)
    const dispatch = useDispatch();
    const getNowPlayingMovies = async()=>{
        const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
        const data = await res.json();
        dispatch(addNowPlayingMovies(data.results));
      }
    
      useEffect(()=>{
        !nowPlayingMovies && getNowPlayingMovies();
      }, [])
}

export default useNowPlayingMovies;