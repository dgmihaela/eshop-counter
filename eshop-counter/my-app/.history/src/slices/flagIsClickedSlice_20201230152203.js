import { createSlice } from '@reduxjs/toolkit';

export const flagIsCliked = createSlice({
    name: 'isClikedFlag',
    initialState: {
        value: {

        }
    },
    reducers: {
        updateFlagIsClicked: (state, action) => {
           state.value= action.payload;
        },
    }
});

export const {getProducts, addProducts, updateProducts} = flagIsCliked.actions;

export const selectProducts = state => state.flagIsCliked.value;

export default flagIsCliked.reducer;