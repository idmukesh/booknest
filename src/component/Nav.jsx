import { useState } from "react";
import '../Nav.css'; // Ensure your CSS file is correctly imported
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <nav className="nav">
      <div className="logo">
        <img src="/logo.jpg" alt="Logo" height="80" />
      </div>
      <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/"><li>Home</li></Link>
        <Link to="/browsebook"><li>Browse Books</li></Link>
        <Link to="/addbook"><li>Add Book</li></Link>
      </ul>
    </nav>
  );
}

export default Nav;
