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

export const {updateFlagIsClicked} = flagIsCliked.actions;

export const isClicked = state => state.isClikedFlag.value;

export default flagIsCliked.reducer;