import axios from "axios";
import { useEffect, useState } from "react"
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Posts() {
    // 🧠 State to store posts
    const [posts, setPosts] = useState([]);

    let [page, setPage] = useState(1);

    // 🔄 State to handle loading status
    const [loading, setLoading] = useState(true);

    // ⚠️ State to handle any errors
    const [error, setError] = useState(null)
    
    // 🔁 Async function to fetch data from API
    const fetchPosts = async(userId) => {
        try {
                const response = await axios.get(`${BASE_URL}/posts?userId=${userId}`)

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


    // 📦 useEffect runs when the component mounts
    useEffect(() => {
        fetchPosts(page);
    }, [page]) // Empty dependency array means this runs only once on mount

    const next = () => {
        if(page >= 10) {
            alert('no more users')
           return page = 10;
        }
        setPage(page + 1);
    }

    const prev = () => {
        if(page <= 1) {
            alert('Already at first page')
            return page = 1;
        }
        setPage(page - 1)
    }

    // 🌀 Show loading indicator
    if (loading) return <Loader />;

    // 🚨 Show error message
    if (error) return <ErrorMessage message={error}/>; 
  return (
    <div>
        <h2>📚 List of Posts</h2>
        <h3>Page {page}</h3>
        <ul>
            {
            posts.slice(0, 10).map((post) => (
                <li key={post.id}>
                    <strong>{post.id}. {post.title}</strong><br />
                    {post.body}
                </li>
            ))}
        <div className="pages">
            <button onClick={prev} className="page prev">Prev</button>
            <button onClick={next} className="page next">Next</button>
        </div>
        </ul>
    </div>
  )
}

export default Posts