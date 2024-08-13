import { createSlice } from "@reduxjs/toolkit";

const gptMoviesSlice = createSlice({
    name: 'gptMovies',
    initialState: {
        searchedMovies: null,
    },

    reducers: {
        addSearchedMovies: (state, action)=>{
            state.searchedMovies = action.payload;
        },
        removeSearchedMovies: (state, action)=>{
            state.searchedMovies = null;
        },
    }
})

export const {addSearchedMovies, removeSearchedMovies} = gptMoviesSlice.actions;
export default gptMoviesSlice.reducer;