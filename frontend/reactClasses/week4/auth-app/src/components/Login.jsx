import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {

      // Mock role assignment for demo
      const role = email.includes('admin') ? 'admin' :
                   email.includes('staff') ? 'staff' : 'customer';

      const user = { email, role }

      login('mock-token-123', user);
      navigate('/dashboard');
    } catch (err) {
      console.log(err.message);
      alert('Login failed. Try with eve.holt@reqres.in');
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input 
        type="email" 
        placeholder="Enter your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <input 
        type="password" 
        placeholder="Enter your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
      <button type="submit">Login</button>
    </form>
  )
}

export default Login