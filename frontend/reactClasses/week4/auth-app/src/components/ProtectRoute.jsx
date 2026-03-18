import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function ProtectRoute({ children, roles }) {
  const { auth } = useContext(AuthContext);

  if (!auth.token) return <Navigate to={'/'} />
  if(roles && !roles.includes(auth.user.role)) return <h1>403 - Access Denied</h1>
  return children;
}

export default ProtectRoute