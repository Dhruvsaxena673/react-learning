import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
// single source of truth
export const store = configureStore({
    reducer: todoReducer
})