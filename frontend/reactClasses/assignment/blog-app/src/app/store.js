// Importing configureStore to create the global Redux store
import { configureStore } from '@reduxjs/toolkit';

// Importing the reducer we will define in blogSlice.js
import blogReducer from '../features/blog/blogSlice';

// Creating and exporting the store
export const store = configureStore({
  reducer: {
    blog: blogReducer, // The "blog" slice of our global state will be managed by blogReducer
  },
});
