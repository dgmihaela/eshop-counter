import {createSlice} from '@reduxjs/toolkit';

export const flagCartClickedSlice = createSlice({
    name: 'isCartClciked',
    initialState: {
        cartFlagValue: false
    }, 
    reducers: {
        updateCartIsClicked: (state, action) => {
            state.value = action.payload;
            console.log(action.payload)
        }
    }
});

export const {updateCartIsClicked} = flagCartClickedSlice.actions;

export default flagCartClickedSlice.reducer;

export const isClicked = state => state.flagIsClickedSlice.cartFlagValue;