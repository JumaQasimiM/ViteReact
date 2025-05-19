import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashbord = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  useEffect(() => {
    const isLogedIn = localStorage.getItem("isLogedIn");
    if (!isLogedIn) {
      setMessage("First Login dann use this page!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [navigate]);

  //   logout
  const handleLogout = () => {
    localStorage.removeItem("isLogedIn");
    navigate("/");
  };
  return (
    <div>
      {message ? (
        <p className="bg-warning p-4 text-center bold">{message}</p>
      ) : (
        // style is incomplete
        <>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2 p-3 bg-info mr-3">
                <h2>Navbar</h2>
                <ul>
                  <li className="btn btn-danger m-2">Products List</li>
                  <li className="btn btn-success m-2">Products List</li>
                  <li className="btn btn-primary m-2">Products List</li>
                  <li className="btn btn-danger m-2">Products List</li>
                  <li className="btn btn-light m-2">Products List</li>
                  <li className="btn btn-warning m-2">Products List</li>
                  <li className="btn btn-dark m-2">Products List</li>
                  <li className="btn btn-danger m-2">Products List</li>
                  <li className="btn btn-light m-2">Products List</li>
                  <li className="btn btn-danger m-2">Products List</li>
                </ul>
              </div>
              <div className="col-md-10 p-3 bg-primary ">
                <h2>Dashbord</h2>
                <button onClick={handleLogout} className="btn btn-info m-1">
                  {" "}
                  Logout
                </button>
                <button className="btn btn-danger m-1"> English</button>
                <button className="btn btn-warning m-1"> Persish</button>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashbord;
