import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
    name : 'categoriesCrud',
    initialState : {
        value : []
    },
    reducers: {
        addCategory : (state, action) => {
            state = state.value.push(action.payload);
        },
        getCategories : (state, action) => {
            state.value = action.payload;
        },
        deleteCategories: (state, action) => {

        }
    }
});

export const {addCategory, getCategories, deleteCategories} = categoriesSlice.actions;

export const selectCategory = state => state.categoriesCrud.value;

export default categorySlice.reducer;