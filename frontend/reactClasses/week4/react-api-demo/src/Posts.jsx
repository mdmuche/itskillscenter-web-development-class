import axios from "axios";
import { useEffect, useState } from "react"
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

function Posts() {
    // 🧠 State to store posts
    const [posts, setPosts] = useState([]);

    // 🔄 State to handle loading status
    const [loading, setLoading] = useState(false);

    // ⚠️ State to handle any errors
    const [error, setError] = useState(null)

    // 📦 useEffect runs when the component mounts
    useEffect(() => {
        // 🔁 Async function to fetch data from API
        const fetchPosts = async() => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

                // ✅ Set the response data into posts state
                setPosts(response.data);
            } catch (err) {
                // ❌ Set an error message if the API call fails
                setError(`${err.message} ❌ Failed to fetch posts.`);
            } finally {
                // ✅ Stop the loading state after request completes
                setLoading(false);
            }
        }

        fetchPosts();
    }, []) // Empty dependency array means this runs only once on mount

    // 🌀 Show loading indicator
    if (loading) return <Loader />;

    // 🚨 Show error message
    if (error) return <ErrorMessage message={error}/>; 
  return (
    <div>
        <h2>📚 List of Posts</h2>
        <ul>
            {posts.slice(0, 10).map((post) => (
                <li key={post.id}>
                    <strong>{post.title}</strong><br />
                    {post.body}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Posts