import { Link } from "react-router-dom";
import "../css/Navbar.css"

export default function Navigation(){


  return <nav className="navbar">
    <div className="navbar-brand">
        <Link to='/'>Movie App</Link>
    </div>
    <div className="navbar-links">
   <Link to="/"  className="nav-link">Home</Link>
   <Link to="/favourate" className="nav-link">Favourate</Link>

    </div>
  </nav>
} 