import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: false,
    reducers: {
        toggleGPT: (state, action)=>{
            return!state;
        },
    }
})


export const {toggleGPT} = gptSlice.actions;

export default gptSlice.reducer;