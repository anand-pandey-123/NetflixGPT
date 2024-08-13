import React from "react";
import { useSelector } from "react-redux";
import useMoiveTrailer from "../hooks/useMovieTrailer";

function VideoBackground({ movieId }) {
  const trailer = useSelector((store)=>store.movies ?.trailerVideo)
  useMoiveTrailer(movieId);
  return (
    <div>
      <div className="w-screen h-full overflow-hidden ">
      <iframe
        
        className="w-screen aspect-video h-full overflow-x-hidden "
        src={"https://www.youtube.com/embed/" + trailer?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        // allowfullScreen
        // frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
    </div>
  );
}

export default VideoBackground;
