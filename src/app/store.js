import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./todosListSlice";

export const store = configureStore({
    reducer: reducer,
})