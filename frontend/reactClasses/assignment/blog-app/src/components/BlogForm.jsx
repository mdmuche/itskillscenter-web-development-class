import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBlog, updateBlog } from '../features/blog/blogSlice';

const BlogForm = ({ existingBlog, onSave }) => {
  // If editing, prefill the form; otherwise, start blank
  const [title, setTitle] = useState(existingBlog ? existingBlog.title : '');
  const [content, setContent] = useState(existingBlog ? existingBlog.content : '');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    
    if (existingBlog) {
      // If blog exists, we're editing
      dispatch(updateBlog({ id: existingBlog.id, title, content }));
    } else {
      // Else, we're adding a new blog
      dispatch(addBlog(title, content));
    }
    
    // Clear the form
    setTitle('');
    setContent('');
    if (onSave) onSave(); // Notify parent to close form if editing
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Blog title"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Blog content"
        value={content}
        required
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
      <button type="submit">{existingBlog ? 'Update' : 'Add'} Blog</button>
    </form>
  );
};

export default BlogForm;