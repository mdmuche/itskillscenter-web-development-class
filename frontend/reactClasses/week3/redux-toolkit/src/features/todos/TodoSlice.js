import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    todos: [],
    count: 0
}

const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 3000));

  
  const notify = (mssg) =>
    toast.promise(resolveAfter3Sec, {
      pending: mssg + ' is pending',
      success: mssg + ' was successful!',
      error: mssg + ' failed'
    });

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {

        addTodo: (state, action) => {
            state.todos.push({
                id: Date.now(),
                text: action.payload,
                completed: false
            })
            state.count += 1;
            notify('Todo add')
        },

        toggleTodo: (state, action) => {
          const todo = state.todos.find((todo) => todo.id === action.payload);
          if (todo) {
            todo.completed = !todo.completed;
          }
        },

        editTodo: (state, action) => {
        const {id, text} = action.payload;
        const todo = state.todos.find(todo => todo.id === id)
        if(todo) todo.text = text;
        state.count -= 1;
        notify('Todo update')
       },

        deleteTodo: (state, action) => {
           state.todos = state.todos.filter((todo) => todo.id !== action.payload)
           notify('Todo delete')
        }
        
    }
})

export const { addTodo, toggleTodo, editTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;