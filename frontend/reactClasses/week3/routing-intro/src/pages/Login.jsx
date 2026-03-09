import { useNavigate } from "react-router-dom"
import { useState } from "react";

import Footer from "../components/common/Footer"
import Header from "../components/common/Header"

function Login() {
    const navigate = useNavigate();
    const [loader, setLoader] = useState('')

    const handleLogin = () => {
        localStorage.setItem('user', true);
        setLoader('Login in...')
        setTimeout(() => {    
          navigate('/dashboard');
          setLoader('');
        }, 3000);
    }
  return (
    <div>
        <Header />
        <h2>Login</h2>
         <button onClick={handleLogin}>Login</button>
         {
            loader &&
            <p>{loader}</p>
         }
        <Footer />
    </div>
  )
}

export default Login