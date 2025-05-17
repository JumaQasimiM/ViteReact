import { Link } from "react-router-dom";
import { useRef } from "react";
import "./navbarStyle.css";
const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsiv_nav");
    
  };
  return (
    <header>
      <h3>Flowers <span className="highlight-logo">Shop</span></h3>
      <nav ref={navRef} >
      <Link to="/" className="">
           Home
          </Link>
          <Link to="/product" className="">
            Product
          </Link>
          <Link to="/service" className="">
            Service
          </Link>
          <Link to="/news" className="">
            News
          </Link>
          <Link to="/dashbord" className="">
            Dashbord
          </Link>
          <Link to="/users" className="">
            Users
          </Link>




        <button onClick={showNavbar} className="nav-btn btn-close-btn">
          <i className="fa fa-xmark"></i>
        </button>
      </nav>
      <button onClick={showNavbar} className="nav-btn">
        <i className="fa fa-bars"></i>
      </button>
    </header>
  );
};

export default Navbar;
