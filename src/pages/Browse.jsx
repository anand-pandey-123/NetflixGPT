import React from "react";
import Header from "../components/Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainComponent from "../components/MainComponent";
import SecondaryComponent from "../components/SecondaryComponent";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import { useDispatch, useSelector } from "react-redux";
import { toggleGPT } from "../utils/gptSlice";
import GptSearchPage from "./GptSearchPage";
import { removeSearchedMovies } from "../utils/gptMoviesSlice";

function Browse() {
  const gptSearchToggle = useSelector((store) => store.gpt)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        navigate("/error")
      });
  };

  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();


  const onClickHandler = () =>{
    dispatch(toggleGPT(gptSearchToggle));
    if(!gptSearchToggle) dispatch(removeSearchedMovies());
  }

  


  return (
    <div className="body bg-zinc-950 w-full h-full text-white relative overflow-y-scroll scrollbar-hide">
      <div className=" w-full flex justify-between fixed z-10 bg-zinc-950 opacity-90 ">
        <Header></Header>
        <button onClick={onClickHandler} className="px-4 py-2  mt-2 text-lg  w-44 h-12 font-semibold rounded-lg border-red-500 border-x-2 border-y-2 hover:bg-red-600">{gptSearchToggle ? "Home" : "GPT Search"}</button>
        <button
          onClick={handleSignOut}
          className="px-4 py-2  mt-2 text-lg  w-40 h-12 font-semibold rounded-lg border-red-500 border-x-2 border-y-2 hover:bg-red-600 mr-32 ml-14 "
        >
          Sign Out
        </button>
      </div>
      {gptSearchToggle ? <GptSearchPage></GptSearchPage> : (
        <>
        <MainComponent></MainComponent>
        <SecondaryComponent></SecondaryComponent>
        </>
      ) }
    </div>
  );
}

export default Browse;
