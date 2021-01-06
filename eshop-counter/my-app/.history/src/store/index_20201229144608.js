import { configureStore } from '@reduxjs/toolkit';
// import counter from '../features/counter/counterSlice';
import categoriesSlie from '../slices/categoriesSlice';
import productsSlice from '../slices/productsSlice';
export default configureStore({
    reducer: {
        categoriesSlice,
        productsSlice
    },
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});