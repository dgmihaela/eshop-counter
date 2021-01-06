import { configureStore } from '@reduxjs/toolkit';
// import counter from '../features/counter/counterSlice';
import categoriesSlice from '../slices/categoriesSlice';
import productsSlice from '../slices/productsSlice';
import flagIsClickedSlice from '../slices/flagIsClickedSlice';
import counterSlice from '../slices/counterSlice';
import flagCartClickedSlice from '../slices/flagCartClickedSlice';

export default configureStore({
    reducer: {
        categoriesSlice,
        productsSlice,
        flagIsClickedSlice,
        counterSlice,
        flagCartClickedSlice
    },
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});