import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'productWithQuantity',
    initialState: {
       productWithQuantity:{
       
       } 
    },
      reducers: {
         setQuantity: (state, action) => {
           state.productWithQuantity[action.payload.productId] = action.payload.quantity;
         }
      }
});

export const {setQuantity, decrement} = counterSlice.actions;

export default counterSlice.reducer;