import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'))
    return { user, token }
  })

  const login = (token, user) => {
     localStorage.setItem('user', JSON.stringify(user))
     localStorage.setItem('token', token)
     setAuth({ token, user })
  }

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setAuth({ token: null, user: null })
  }

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
        {children}
    </AuthContext.Provider>
  )
}