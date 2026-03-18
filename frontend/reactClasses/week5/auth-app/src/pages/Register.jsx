import { useState } from "react"
import axios from "../utils/axios";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Register() {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      gender: '',
      role: '',
      dateOfBirth: '',
      phone: '',
      address: ''
    })

    const [sucess, setSucess] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    if(formData.password !== formData.confirmPassword) {
      setError('Passwords does not match');
      return false
    }

    if(formData.password.length < 8) {
      setError('Password must be atleast 8 characters long');
      return false;
    }
  }


    const handleSubmit = async(e) => {
        e.preventDefault();

        setLoading(true);
        try {
           const res = await axios.post('/auth/register', formData)
           validateForm()
           setSucess(res.data.message || 'Registration successful');
           setTimeout(() => {
             navigate('/login');
           }, 3000);
           setFormData({
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              confirmPassword: '',
              gender: '',
              role: '',
              dateOfBirth: '',
              phone: '',
              address: ''
           })
        } catch (err) {
          console.error(err.message);
          setLoading(false);
          setError(err.response?.data?.message || 'Registration failed');
        } finally {
          setLoading(false);
        }
    };
    
  return (
    <div>
      <Nav />
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map(key => (
            <div key={key}>
                {key === 'gender' || key === 'role' ? (
                  <select
                    className="select"
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select {key}</option>
                    {
                      key === 'gender' && (
                        <>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </>
                      )
                    }
                
                {
                  key === "role" && (
                    <>
                      <option value="patient">Patient</option>
                      <option value="health_worker">Health Worker</option>
                    </>
                  )}
                  </select>
               ) : (
                <input 
                  type={
                    key === 'email'
                    ? 'email'
                    : key === 'phone'
                    ? 'tel'
                    : key === 'dateOfBirth'
                    ? 'date'
                    : key.includes('password')
                    ? 'password'
                    : 'text'
                  }
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  placeholder={key}
                  required
                />
               )}
               </div>
              ))}
              <br />
          <button type="submit" disabled={loading}>
            {
              loading ? 'Registering...' : 'Register'
            }
          </button>
        </form>
        {
         sucess ? 
            <p>{sucess}</p>
            : <p>{error}</p>
        }
        <Footer />
    </div>
  )
}

export default Register