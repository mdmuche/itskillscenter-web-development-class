import Nav from '../components/Nav'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from '../utils/axios';
import Footer from '../components/Footer';

function Login() {
  const [formData, setFormData] = useState({
      email: '',
      password: '',
    })

    const [sucess, setSucess] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    
    const handleChange = e => {
      setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };
    
    const handleSubmit = async(e) => {
      e.preventDefault();
      
      setLoading(true);
      try {
        const res = await axios.post('/auth/login', formData)
        
        // store token and user details to localstorage
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user))
        
        setSucess(`${res.data.message + ' Redirecting user...'}` || 'Registration successful Redirecting user...');
        setTimeout(() => {
             navigate('/dashboard');
           }, 3000);
           setFormData({
              email: '',
              password: '',
           })
        } catch (err) {
          console.error(err.message);
          setLoading(false);
          setError(err.response?.data?.message || 'Login failed');
        } finally {
          setLoading(false);
        }
    };
  return (
    <div>
        <Nav />
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) => (
            <>
              <input type={key}
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
          <button type="submit" disabled={loading}>
            {
              loading ? 'Logining...' : 'Login'
            }
          </button>
        </form>
        {
         sucess ? 
            <p className='msg success'>{sucess}</p>
            : <p className='msg error'>{error}</p>
        }
        <Footer />
    </div>
  )
}

export default Login