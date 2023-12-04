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
        editTodo: (state, action) => {
            const newTodos = [...state.todos];
            const editedTodoIndex = newTodos.findIndex(el => el.id === action.payload.id);
            newTodos[editedTodoIndex] = action.payload;
            return { ...state, todos: newTodos };
        },
        deleteTodo: (state, action) => {
            const newTodos = [...state.todos];
            const editedTodoIndex = newTodos.findIndex(el => el.id === action.payload.id);
            newTodos.splice(editedTodoIndex, 1);
            return { ...state, todos: newTodos };
        },
        createTodo: (state, action) => {
            const newTodos = [...state.todos, action.payload];
            return { ...state, todos: newTodos };
        },
        changeItemsPerPage: (state, action) => {
            return { ...state, itemsPerPage: action.payload };
        },
        loadTodos: (state, action) => {
            return { ...state, todos: action.payload };
        }
    },
})

export const { editTodo, deleteTodo, createTodo, changeItemsPerPage, loadTodos } = todosListSlice.actions;

export const reducer = todosListSlice.reducer;