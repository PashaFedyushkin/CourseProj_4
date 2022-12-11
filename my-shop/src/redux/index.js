import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/reducer';
import booksReducer from './book/reducer';

export const store = configureStore({
    reducer:{
        cart : cartReducer,
        book : booksReducer,
    },
});