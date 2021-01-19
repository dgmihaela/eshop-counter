import { createSlice } from '@reduxjs/toolkit';

export const flagIsClickedSlice = createSlice({
    name: 'isClikedFlag',
    initialState: {
        flag: false
    },
    reducers: {
        updateFlagIsClicked: (state, action) => {
           state.flag = true;
        },
    }
});

export const {updateFlagIsClicked} = flagIsClickedSlice.actions;

export const isClicked = state => state.flagIsClickedSlice.value;

export default flagIsClickedSlice.reducer;