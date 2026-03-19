import { useState } from "react";
import authService from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Login() {
    const [formData, setFormData] = useState({
        email: '', 
        password: ''
    });
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => (
        {
            ...prev, 
            [e.target.name]: e.target.value,
        }
    ))
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    setLoading(true)

    const result = await authService.login(formData);
    if(result.success){
        setTimeout(() => {
            navigate('/dashboard');
        }, 3000);
    } else {
        setMessage(result.message);
    }


    setFormData({
        email: '',
        password: ''
    })
  }
  return (
    <div>
        <Nav />
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {
            Object.keys(formData).map((key) => (
                <>
                    <input 
                        type={key}
                        name={key}
                        placeholder={key}
                        value={formData[key]}
                        onChange={handleChange} 
                        required
                        />
                    <br />
               </>
            ))
        }
        <button type="submit">
            {
              loading ?  'Loginin...' : 'Login'
            }
        </button>
        </form>
        {
            message && (
                <p>{message}</p>
            )
        }
        <Footer />
    </div>
  )
}

export default Login