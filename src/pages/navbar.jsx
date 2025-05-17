import { Link } from "react-router-dom";
import "./nav.css";
import { useState } from "react";
const Navbar = () => {
  const [isOpen , setIsOpen] = useState(false);

  const toggel_btn = document.querySelector(".toggel_btn");
  const toggel_btn_icon = document.querySelector(".toggel_btn i");
  const drop_down_menu = document.querySelector(".drop_down_menu");

  const handelChange_menu = () => {

    drop_down_menu.classList.toggle('open');

    const isOpen = drop_down_menu.classList.contains('open');

    toggel_btn_icon.classList = isOpen
      ? "fa-solid fa-xmark"
      : "fa-solid fa-bars";

  };

  return (
    <div className="header">
      <div className="navbar fixed-top">
        <div className="logo">
          <a href="#">Flower Shop</a>
        </div>

        <ul className="links">
        <Link to="/" className="">
           Home
          </Link>

          <li>
          <Link to="/" className="">
            About
          </Link>
        </li>
          <li>
          <Link to="/product" className="">
            Product
          </Link>
          </li>
          <li>
          <Link to="/service" className="">
            Service
          </Link>
          </li>
          <li>
          <Link to="/news" className="">
            News
          </Link>
          </li>
          <li>
          <Link to="/dashbord" className="">
            Dashbord
          </Link>
          </li>
        </ul>
        <a href="#" className="action_btn btn btn-outline-success">
          
          <Link to="/login" className="nav-link">
          <i className="fa-solid fa-right-to-bracket"></i>
          </Link>
        </a>
        <div className="toggel_btn" onClick={()=>setIsOpen(!isOpen)}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
      {/* drop_down menu */}
      <div className="drop_down_menu">
        <li>
          <a href="hero">Home</a>
        </li>
        <li>
          <a href="service">Service</a>
        </li>
        <li>
          <a href="about">About</a>
        </li>
        <li>
          <a href="Contuct">Contuct us</a>
        </li>
        <li>
          <a href="hero">Home</a>
        </li>
        <li>
          <a href="hero">Home</a>
        </li>
        <li>
          <a href="hero">Home</a>
        </li>
        <a href="#" className="action_btn btn btn-outline-success">
          <span>Login </span>
          <i class="fa-solid fa-right-to-bracket btn_login p-1"></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
