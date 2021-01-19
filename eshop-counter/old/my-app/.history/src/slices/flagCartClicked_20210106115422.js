import {createSlice} from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

export const flagCartClickedSlice = createSlice({
    name: 'isCartClciked',
    initialState: {
        value: false
    }, reducers: {
        updateCartIsClicked: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const {updateCartIsClicked} = flagCartClickedSlice.actions;

export default flagCartClickedSlice.reducer;

export const flagSelectorClick = state => state;