import { configureStore } from '@reduxjs/toolkit';
// import counter from '../features/counter/counterSlice';
import categoriesSlide from '../slices/categoriesSlide';
import productsSlide from '../slices/productsSlide';
export default configureStore({
    reducer: {
        categoriesSlide,
        productsSlide
    },
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});