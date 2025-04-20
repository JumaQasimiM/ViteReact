import logo from "../../src/assets/1.jpg";
const Footer = () => {
  return (
    <footer className="border-top mt-1">
      <div className="row p-3 text-center">
        <div className="col-md-4 p-3">
          <img src={logo} width={220} className="" />
          <h3>Green Power</h3>
          <p className="">Green Power GmbH</p>
        </div>
        <div className="col-md-4 p-3">
          <h4>Links</h4>
          <p>
            <a href="" className="">
              Home
            </a>
          </p>
          <p>
            <a href="" className="">
              About
            </a>
          </p>
          <p>
            <a href="" className="">
              Contuct
            </a>
          </p>
          <p>
            <a href="" className="">
              Prduct
            </a>
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
