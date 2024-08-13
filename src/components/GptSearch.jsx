import React, { useRef } from "react";
import client from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addSearchedMovies } from "../utils/gptMoviesSlice";
import MovieCard from "./MovieCard";

function GptSearch() {
  const dispatch = useDispatch();
  const searchText = useRef(null);
 

  const handleSearch = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchText.current.value}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const data = await res.json();
    dispatch(addSearchedMovies(data.results));

    searchText.current.value = "";
    // console.log(searchText.current.value);

    // const searchQuery =  searchText.current.value ;
    // const searchedResult = await client.chat.completions.create({
    //     messages: [{ role: 'user', content: "5 retro movies" }],
    //     model: 'gpt-3.5-turbo-1106',
    // });
    // console.log(searchedResult.choices)
    
  };

  return (
    <div className="relative flex justify-center">
      <div className="absolute  my-52     w-1/2 mx-auto  h-14 p-2">
        <form
          action=""
          className="w-full h-full"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            placeholder="search movies"
            className="w-[80%] h-full mr-2 px-3 text-lg text-white bg-black rounded-sm border-x-2 border-y-2 border-red-600 "
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 ml-2 bg-red-600 w-[16%] rounded-md"
          >
            search
          </button>
        </form>
      </div>
      
    </div>
  );
}

export default GptSearch;
