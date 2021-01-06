import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
       counter:{
        nrItems: 0,
        productId: null
       } 
    },
    reducers: {
        increment: (state, action) => {
           

           action.payload.nrItems = state.counter.nrItems + 1;
           state.counter = action.payload

           console.log(action.payload);
        },
        decrement: (state, action) => {
         action.payload.nrItems = state.counter.nrItems - 1;
         state.counter = action.payload
         },
    }
});

export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;