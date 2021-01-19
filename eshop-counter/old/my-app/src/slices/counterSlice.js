import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'productWithQuantity',
    initialState: {
       productWithQuantity:{
       
       } 
    },
      reducers: {
         setQuantity: (state, action) => {
            console.log('store: setting quantity');
           state.productWithQuantity[action.payload.productId] = action.payload.quantity;
         }
      }
});

export const {setQuantity} = counterSlice.actions;

export default counterSlice.reducer;