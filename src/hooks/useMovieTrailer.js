import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMoiveTrailer = (movieId)=>{
  const movieTrailer = useSelector((state) => state.movies.trailerVideo);
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const data = await res.json();

    const trailer = data.results.filter((video) => video.type === "Trailer");
    const filteredTrailer = trailer[0];
    dispatch(addTrailerVideo(filteredTrailer))
  };

  useEffect(() => {
    !movieTrailer && getMovieVideo();
  }, []);

}

export default useMoiveTrailer;