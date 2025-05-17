import { Link } from "react-router-dom";
import first from  "../assets/product1.png";
const Footer = () => {
  return (
    <footer className="border-top mt-1">
      <div className="row p-3 text-center">
        <div className="col-md-4">
          <img src={first} width={160} height={160} className="" />
          <h3>Flowers Shop</h3>
          <p className="">Flowers Shop GmbH</p>
        </div>
        <div className="col-md-4 p-3">
          <h4>Links</h4>
         
          <p>
          <Link to="/service" className="">
          Service
        </Link>
          </p>
          <p>
          <Link to="/product" className="">
          Product
        </Link>
        
          </p>
          <p>
          <Link to="/" className="">
           Home
          </Link>
          </p>
        </div>
        <div className="col-md-4">
          <h4>Contuct us!</h4>
          <p>text@gmail.com</p>
          <p>+49 234 456 678</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
