import { Link } from "react-router-dom"

function Error() {
  return (
    <div 
        style={{ 
            backgroundColor: 'black', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh' 
            }}
            >
        <img src="./images/error.png" alt="error page" />
        <img src="./images/error-2.png" alt="error page" />
        <Link style={{ 
          color: "white", 
          textDecoration: 'none', 
          marginLeft: '20px', 
          fontSize: '30px' 
          }}  to={'/'}>Go to Home</Link>
    </div>
  )
}

export default Error