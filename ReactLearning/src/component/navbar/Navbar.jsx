import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">MyApp</Link>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/register" className="nav-link">
          Register
        </Link>
        <Link to="/signin" className="nav-link">
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
