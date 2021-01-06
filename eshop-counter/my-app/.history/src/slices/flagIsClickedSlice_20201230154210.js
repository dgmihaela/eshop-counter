import { createSlice } from '@reduxjs/toolkit';

export const flagIsClickedSlice = createSlice({
    name: 'isClikedFlag',
    initialState: {
        value: {

        }
    },
    reducers: {
        updateFlagIsClicked: (state, action) => {
           state.value = action.payload;
        },
    }
});

export const {updateFlagIsClicked} = flagIsClickedSlice.actions;

export const isClicked = state => state.flagIsClickedSlice.value;

export default flagIsClickedSlice.reducer;