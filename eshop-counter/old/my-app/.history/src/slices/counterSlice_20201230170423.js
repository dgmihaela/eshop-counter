import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'isClikedFlag',
    initialState: {
        counter: {
            nrItems: 0,
        }
    },
    reducers: {
        countItems: (state, action) => {
           state.value = action.payload;
        },
    }
});

export const {countItems} = counterSlice.actions;


export default counterSlice.reducer;