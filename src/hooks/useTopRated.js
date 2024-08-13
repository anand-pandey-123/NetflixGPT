import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTopRated = ()=>{
    const dispatch = useDispatch();
    const getTopRatedMovies = async()=>{
        const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
        const data = await res.json();
        dispatch(addTopRatedMovies(data.results));
      }
    
      useEffect(()=>{
        getTopRatedMovies();
      }, [])
}

export default useTopRated;