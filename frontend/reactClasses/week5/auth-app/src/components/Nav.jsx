import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

function Nav() {
const [loading, setLoading] = useState(false)
const navigate = useNavigate();

  const token = localStorage.getItem('token');
  const isLoggedIn = !!token;

  const logout = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.clear();
      navigate('/login');
    }, 3000);
  }
  return (
    <nav className="header">
      <div className="nav-left">
        <Link to={'/'}>Home</Link>
      </div>

      <div className="nav-right">
        {!isLoggedIn ? (
          <>
          <Link to={'/register'}>Register</Link>
          <Link to={'/login'}>Login</Link>
          </>
        )
        : 
        (
          <>
          <Link to={'/dashboard'}>Dashboard</Link>
          <button className="nav-btn" onClick={logout}>
              {loading ?
                'Loging out...' : 'Logout'
              }
          </button>
          </>
        )
        }
      </div>
    </nav>
  )
}

export default Nav