import { createSlice } from '@reduxjs/toolkit';
import LeftSideCategory from '../components/LeftSideCategory';

export const flagIsClickedSlice = createSlice({
    name: 'isClikedFlag',
    initialState: {
        value: {
            flag: false,
            id: null
        },
        cartFlagValue: false
    },
    reducers: {
        updateFlagIsClicked: (state, action) => {
           state.value = action.payload;
        },
    }
});

export const {updateFlagIsClicked} = flagIsClickedSlice.actions;

export default flagIsClickedSlice.reducer;

export default isClicked = state => state.flagIsClickedSlice.cartFlagValue;