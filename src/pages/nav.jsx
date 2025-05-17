import { Link } from "react-router-dom";
import "./nav.css";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle_menu = () =>setIsOpen(!isOpen);
 

  return (
    <header className="navbar">
        <div className="container">
            <div className="logo">Logo</div>    
        </div>    
        <nav className={`nav-links ${isOpen ? 'acctive':''}`}>
            <a href="">Home</a>
            <a href="">Home</a>
            <a href="">Home</a>
        </nav>
        <button className="menu-icon" onClick={toggle_menu}>
            <i className={`fas ${isOpen ? 'fa-xmark':'fa-bars'}`}></i>
        </button>
     </header>
  );
};

export default Navbar;
