import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Users() {
   // 🧠 State to store users
      const [users, setUsers] = useState([]);

      const [searchValue, setSearchValue] = useState('');
  
      // 🔄 State to handle loading status
      const [loading, setLoading] = useState(false);
  
      // ⚠️ State to handle any errors
      const [error, setError] = useState(null)

      // 📦 useEffect runs when the component mounts
    useEffect(() => {
        // 🔁 Async function to fetch data from API
        const fetchPosts = async() => {
            try {
                const response = await axios.get(`${BASE_URL}/users`)

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

        setTimeout(() => {
            fetchPosts();
        }, 5000);
    }, []) // Empty dependency array means this runs only once on mount

    const search = () => {
        if(searchValue === '') return alert('no user')
        setUsers(users.filter(user => user.name === searchValue));
        setSearchValue('');
    }

    // 🌀 Show loading indicator
    if (loading) return <Loader />;

    // 🚨 Show error message
    if (error) return <ErrorMessage message={error}/>; 
  return (
    <div>
        <div>
            <h2>🧔 List of Users</h2>
            <input type="text" placeholder="search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            <button onClick={() => search()}>Search</button>
        </div>
        <ul>
            {users.slice(0, 5).map((user) => (
                <li key={user.id}>
                    <strong>{user.id}. {user.name}</strong><br />
                    {user.email}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Users