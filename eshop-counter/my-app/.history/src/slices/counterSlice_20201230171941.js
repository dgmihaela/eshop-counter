import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        nrItems: 0
    },
    reducers: {
        increment: (state, action) => {
           state.nrItems = action.payload + 1;
           console.log(state.nrItems)
        },
        decrement: (state, action) => {
            state.nrItems = action.payload - 1;
            console.log(state.nrItems)
         },
    }
});

export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;