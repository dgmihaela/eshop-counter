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
           state.counter[action.payload.productId] = action.payload.quantity;
         },
         decrement: (state, action) => {
            if(state.counter.quantity > 0){
               action.payload.quantity = state.counter.quantity - 1;
               state.counter = action.payload;
            }
         },
      }
});

export const {setQuantity, decrement} = counterSlice.actions;

export default counterSlice.reducer;