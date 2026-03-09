import { useNavigate } from "react-router-dom";
import Footer from "../components/common/Footer"
import Header from "../components/common/Header"
import { useState } from "react";

function Dashboard() {
  const [loader, setLoader] = useState('');
  const navigate = useNavigate();
  const handleLogout = () => {
  localStorage.removeItem('user');
  setLoader('logging out...')
  setTimeout(() => {
    navigate('/login');
    setLoader('');
  }, 500);
};

  return (
    <div>
      { loader ? (
        <p>{loader}</p>
      ) :
       (
        <>
        <Header />
        <h2>Dashboard</h2>
        <button onClick={handleLogout}>Logout</button>
        <Footer />
        </>
      )
      }
    </div>
  )
}

export default Dashboard