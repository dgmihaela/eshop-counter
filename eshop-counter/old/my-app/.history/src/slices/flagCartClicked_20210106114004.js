import {createSlice} from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

export const flagCartClicked = createSlice({
    name: 'isCartClciked',
    initialState: {
        value: false
    }, reducers: {
        updateCartIsClicked: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const {updateCartIsClicked} = flagCartClicked.actions;
export default flagCartClicked.reducer;