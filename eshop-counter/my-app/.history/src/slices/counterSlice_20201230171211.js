import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        nrItems: 0
    },
    reducers: {
        countItems: (state, action) => {
           state.nrItems = action.payload;
        },
    }
});

export const {countItems} = counterSlice.actions;

export default counterSlice.reducer;