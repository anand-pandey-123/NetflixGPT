import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import gptMovies from "./gptMoviesSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        gptMovies: gptMovies
    }, // Define your reducers here
})