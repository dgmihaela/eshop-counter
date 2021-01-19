import { createSlice } from '@reduxjs/toolkit';
import LeftSideCategory from '../components/LeftSideCategory';

export const flagIsClickedSlice = createSlice({
    name: 'isClikedFlag',
    initialState: {
        counter: {
            nrItems: 0,
            prece: null
        }
    },
    reducers: {
        updateFlagIsClicked: (state, action) => {
           state.value = action.payload;
        },
    }
});

export const {updateFlagIsClicked} = flagIsClickedSlice.actions;


export default flagIsClickedSlice.reducer;