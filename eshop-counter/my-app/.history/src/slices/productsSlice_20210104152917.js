import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'productsCrud',
    initialState: {
        value: {

        }
    },
    reducers: {
        getProducts: (state, action) => {
           state.value[action.payload.id] = action.payload.products;
           console.log(state.value[action.payload.id])
        },
        addProducts: (state, action) => {
            state.value[action.payload.id] = action.payload.product;
        },
        updateQuantity: (state, action) => {

            for(let item in state.value){
                console.log(item[0])
            }
           //state.value[action.payload.id] = action.payload;
        }
    }
});

export const {getProducts, addProducts, updateQuantity} = productsSlice.actions;

export const selectProducts = state => state.productsSlice.value;

export default productsSlice.reducer;