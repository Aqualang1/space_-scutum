import { createSlice } from '@reduxjs/toolkit'
import { mockTodos } from '../constants/constants'

const initialState = {
    todos: JSON.parse(mockTodos),
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
        deleteTodo: (state, action) => {
            const newTodos = [...state.todos];
            const editedTodoIndex = newTodos.findIndex(el => el.id === action.payload.id);
            // debugger;
            newTodos.splice(editedTodoIndex, 1);
            return { ...state, todos: newTodos };
        }
    },
})

export const { edit, deleteTodo } = todosListSlice.actions;

export const reducer = todosListSlice.reducer;