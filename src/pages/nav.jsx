import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="text-warning navbar navbar-expand-lg navbar-dark bg-dark">
      <h2 className="navbar-brand text-danger">REACT </h2>
      <ul className="container ms-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/users" className="nav-link">
            Users
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/dashbord" className="nav-link">
            Dashbord
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/service" className="nav-link">
            Service
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/news" className="nav-link">
            News
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
