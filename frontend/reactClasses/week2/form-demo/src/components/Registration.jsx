import { useState } from "react"
import '../css/Registration.css'

export default function Registration() {
  // State to manage form inputs
  const [formData, setFormData]  = useState({
      name: '',
      email: '',
      password: ''
  });

  // State to store submitted data
  const [submittedData, setSubmittedData] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('data', formData);
    setSubmittedData(formData);
    setFormData({name: '', email: '', password: ''})
  }

  return (
    <div>
      <h1>Welcome to registration page</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          id="name" 
          value={formData.name}
          placeholder="Enter your name"
        onChange={handleChange} 
        /><br /> <br />
        <input 
          type="email" 
          name="email" 
          id="email" 
          value={formData.email}
          placeholder="Enter your email"
        onChange={handleChange} 
        /><br /> <br />
        <input 
          type="password" 
          name="password" 
          id="password" 
          value={formData.password}
          placeholder="Enter your password"
        onChange={handleChange} 
        /><br /> <br />
        <button type="submit">Submit</button>
      </form>

      {
        submittedData && (
          <div className="card">
            <h3>Submitted Info</h3>
             <p><strong>Name: </strong>{submittedData.name}</p>
             <p><strong>Email: </strong>{submittedData.email}</p>
          </div>
        )
      }
    </div>
  )
}