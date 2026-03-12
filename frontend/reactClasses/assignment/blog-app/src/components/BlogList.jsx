import { useSelector } from 'react-redux';
import BlogItem from './BlogItem';
import { useEffect } from 'react';

const BlogList = () => {
  // Access the blogs from Redux state
  const blogs = useSelector((state) => state.blog.blogs);
  console.log(typeof(blogs));
  
  
  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs])
  
  if (blogs.length === 0) {
    return <p>No blog posts available.</p>;
  }

  return (
    <div>
      {blogs.slice(0, 10).map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;