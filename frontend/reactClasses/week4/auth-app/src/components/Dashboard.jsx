import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { auth, logout } = useContext(AuthContext);
  return (
    <div>
      <h2>Hello, {auth.user.email}</h2>
      <h4>Role: {auth.user.role}</h4>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard