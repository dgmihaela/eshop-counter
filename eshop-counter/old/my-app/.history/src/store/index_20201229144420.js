import { configureStore } from '@reduxjs/toolkit';
// import counter from '../features/counter/counterSlice';
import categoriesSlide from '../slices/categoriesSlide.js';
import productsSlide from '../slices/productsSlide.js';
export default configureStore({
    reducer: {
        categoriesSlide,
        productsSlide
    },
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});