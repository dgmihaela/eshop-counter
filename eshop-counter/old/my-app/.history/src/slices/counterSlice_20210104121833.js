import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
       counter:{
       
       } 
    },
      reducers: {
         setQuantity: (state, action) => {
           //action.payload.nrItems = state.counter.nrItems + 1;
           state.counter[action.payload.productId] = action.payload.nrItems;
         },
         decrement: (state, action) => {
            if(state.counter.nrItems > 0){
               action.payload.nrItems = state.counter.nrItems - 1;
               state.counter = action.payload;
            }
         },
      }
});

export const {setQuantity, decrement} = counterSlice.actions;

export default counterSlice.reducer;