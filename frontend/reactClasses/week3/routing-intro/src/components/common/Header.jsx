import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
        <header>
            <h3>Blog</h3>
            <nav>
                <Link to="/" >Home</Link> |{" "}
                <Link to="/about" >About</Link> |{" "}
                <Link to="/blog" >Blog</Link> |{" "}
                <Link to="/login" >Login</Link> |{" "}
                <Link to="/dashboard" >Dashboard</Link>
            </nav>

        </header>
    </div>
  )
}

export default Header