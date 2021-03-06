import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
    name : 'categoriesCrud',
    initialState : [],
    reducers: {
        addCategory : (state, action) => {
            state = state.value.push(action.payload);
        },
        getCategories : (state, action) => {
            state.value = action.payload;
            console.log('action payload get', action.payload)
        },
        deleteCategories: (state, action) => {

        }
    }
});

export const {addCategory, getCategories, deleteCategories} = categoriesSlice.actions;

export const selectCategories = state => state.categoriesCrud.value;

export default categoriesSlice.reducer;