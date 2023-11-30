import { configureStore } from "@reduxjs/toolkit";
import todosListSlice, { reducer } from "./todosListSlice";

export const store = configureStore({
    reducer: reducer,
})