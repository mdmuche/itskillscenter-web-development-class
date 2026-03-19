import { useState } from "react";
import authService from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Register() {
    const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', password: '',
    confirmPassword: '', gender: '', role: '', dateOfBirth: '',
    phone: '', address: ''
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

    const result = await authService.register(formData);
    setMessage(result.message);

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
  }
  return (
    <div>
        <Nav />
        <h2>Register</h2>
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
        <button type="submit">
            {
              loading ?  'Registering...' : 'Register'
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

export default Register