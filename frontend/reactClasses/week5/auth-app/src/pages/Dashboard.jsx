import { useEffect } from 'react'
import Nav from '../components/Nav'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer';

function Dashboard() {
  const navigate = useNavigate();

  const storedUser = localStorage.getItem('user');
     const user = JSON.parse(storedUser);
     useEffect(() => {

      if (!storedUser) {
        navigate('/login')
      }
  }, [ navigate, storedUser ])

  
  return (
    <div>
        <Nav />
        <div className='dashboard'>
        <h2>Dashboard</h2>
        {
          user ? (
            <>
              <div>
                <p className='dash-para'><strong>Name: </strong>{user.firstName} {user.lastName}</p>
                <p className='dash-para'><strong>Email: </strong> {user.email}</p>
                <p className='dash-para'><strong>Role: </strong> {user.role}</p>
                <p className='dash-para'><strong>Gender: </strong> {user.gender}</p>
                <p className='dash-para'><strong>DOB: </strong> {user.dateOfBirth}</p>
                <p className='dash-para'><strong>Phone: </strong> {user.phone}</p>
                <p className='dash-para'><strong>Address: </strong> {user.address}</p>
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )
        }
        </div>
        <Footer />
    </div>
  )
}

export default Dashboard