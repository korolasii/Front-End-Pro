import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
    },
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                text: action.payload,
            };
            state.items.push(newTodo);
        },
        deleteTodo: (state, action) => {
            state.items = state.items.filter(todo => todo.id !== action.payload);
        },
    },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
