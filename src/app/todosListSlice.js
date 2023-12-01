import { createSlice } from '@reduxjs/toolkit'
import { mockTodos } from '../constants/constants'

const initialState = {
    todos: mockTodos,
    itemsPerPage: 10
}


export const todosListSlice = createSlice({
    name: 'todoslist',
    initialState,
    reducers: {
        edit: (state, action) => {
            console.log(state);
            const newTodos = [...state.todos];
            const editedTodoIndex = newTodos.findIndex(el => el.id === action.payload.id);
            newTodos[editedTodoIndex] = action.payload;
            return { ...state, todos: newTodos };
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

export const { edit } = todosListSlice.actions;

export const reducer =  todosListSlice.reducer;