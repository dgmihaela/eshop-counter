import { configureStore } from '@reduxjs/toolkit';
// import counter from '../features/counter/counterSlice';
import categoriesSlice from '../slices/categoriesSlice';
import productsSlice from '../slices/productsSlice';
export default configureStore({
    reducer: {
        categoriesSlice,
        productsSlice,
        flagIsCliked
    },
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});