import { createSlice } from '@reduxjs/toolkit';
import LeftSideCategory from '../components/LeftSideCategory';

export const flagIsClickedSlice = createSlice({
    name: 'isClikedFlag',
    initialState: {
        value: {
            flag: false,
            id: category.id
        }
    },
    reducers: {
        updateFlagIsClicked: (state, action) => {
           state.flag = true;
        },
    }
});

export const {updateFlagIsClicked} = flagIsClickedSlice.actions;


export default flagIsClickedSlice.reducer;