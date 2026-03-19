import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Dashboard() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        if(!user) {

        navigate('/login')
    }
    }, [user, navigate])
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