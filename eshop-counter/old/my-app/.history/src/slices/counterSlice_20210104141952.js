import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
       counter:{
       
       } 
    },
      reducers: {
         setQuantity: (state, action) => {
           state.counter[action.payload.productId] = action.payload.quantity;
         }
      }
});

export const {setQuantity, decrement} = counterSlice.actions;

export default counterSlice.reducer;