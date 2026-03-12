import { useState } from 'react';
import BlogForm from './BlogForm';
import Dialog from './Dialog';

const BlogItem = ({ blog }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [ dialog, setDialog ] = useState(false);

  const showDialog = () => {
        setDialog(true);
  }

  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', marginBottom: '1rem' }}>
      {isEditing ? (
        <BlogForm existingBlog={blog} onSave={() => setIsEditing(false)} />
      ) : (
        <>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={showDialog}>Delete</button>
          {
            dialog &&
            <Dialog setDialog={setDialog} blog={blog}/>
          }
        </>
      )}
    </div>
  );
};

export default BlogItem;