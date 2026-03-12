import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

function Users() {
   // 🧠 State to store users
      const [users, setUsers] = useState([]);
  
      // 🔄 State to handle loading status
      const [loading, setLoading] = useState(false);
  
      // ⚠️ State to handle any errors
      const [error, setError] = useState(null)

      // 📦 useEffect runs when the component mounts
    useEffect(() => {
        // 🔁 Async function to fetch data from API
        const fetchPosts = async() => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users')

                // ✅ Set the response data into posts state
                setUsers(response.data);
            } catch (err) {
                // ❌ Set an error message if the API call fails
                setError(`${err.message} ❌ Failed to fetch users.`);
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
        <div>
            <h2>🧔 List of Users</h2>
            <input type="text" placeholder="search" />
        </div>
        <ul>
            {users.slice(0, 5).map((user) => (
                <li key={user.id}>
                    <strong>{user.name}</strong><br />
                    {user.email}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Users