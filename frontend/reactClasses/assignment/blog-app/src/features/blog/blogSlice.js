// Imports from Redux Toolkit
import { createSlice, nanoid } from '@reduxjs/toolkit';
import { toast } from "react-toastify";

const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];

// Initial state: an object with a blogs array
const initialState = {
  blogs: storedBlogs,
};

const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 3000));

const notify = (mssg) =>
    toast.promise(resolveAfter3Sec, {
      pending: mssg + ' is pending',
      success: mssg + ' was successful!',
      error: mssg + ' failed'
    });

// Creating a slice for blog state
const blogSlice = createSlice({
  name: 'blog', // Name of the slice
  initialState,
  reducers: {
    // Action: Add a new blog post
    addBlog: {
      reducer(state, action) {
        state.blogs.push(action.payload);
        notify('Blog add');
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(), // generate unique ID
            title,
            content,
          },
        };
      },
    },
    // Action: Delete a blog post
    deleteBlog(state, action) {
      state.blogs = state.blogs.filter(blog => blog.id !== action.payload);
      notify('Blog delete');
    },
    // Action: Update a blog post
    updateBlog(state, action) {
      const { id, title, content } = action.payload;
      const blogToUpdate = state.blogs.find(blog => blog.id === id);
      if (blogToUpdate) {
        blogToUpdate.title = title;
        blogToUpdate.content = content;
      }
      notify('Blog update');
    },
  },
});

// Exporting actions to use in components
export const { addBlog, deleteBlog, updateBlog } = blogSlice.actions;

// Exporting reducer to use in store
export default blogSlice.reducer;
