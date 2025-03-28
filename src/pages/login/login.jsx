import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ResjesterForm from "../user/addUser";
import { Link } from "react-router-dom";
// Loign

function Login() {
  function getDay(date = new Date()) {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  }
  const [email, setEmail] = useState("");
  const [password, setPasswrd] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // for change pages dir

  // default password
  const validUser = {
    email: "juma@test.com",
    password: "12345",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === validUser.email && password === validUser.password) {
      // store in LocalStorage
      localStorage.setItem("isLogedIn", "true");
      // now redirect to dashbord page
      navigate("/dashbord");
    } else {
      setError("Email or Password is incorrect!");
    }
  };
  const handelSingUp =()=>{
    navigate('/register')
  }

  return (
    <>
      {getDay() !== "Sunday" ? (
        <>
          <div className="container col-md-6 border p-3 mt-2">
            <h1 className="text-primary text-center display-3">Sing In</h1>
            {/* style is incomplete just error style */}

            {error && (
              <p className="bg-danger text-center p-2 rounded-1 text-white">
                {error}
              </p>
            )}

            <form
              action=""
              method="post"
              className="row g-2"
              onSubmit={handleSubmit}
            >
              <div className="">
                <label htmlFor="username" className="form-label">
                  User name ( username: juma@test.com )
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter Your user name "
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
              </div>
              <div className="">
                <label htmlFor="password" className="form-label">
                  Password ( password: 12345 )
                </label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                  className="form-control"
                  value={password}
                  onChange={(e) => {
                    setPasswrd(e.target.value);
                  }}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Sing In
              </button>
              <button type="button" className="btn btn-success"  onClick={handelSingUp}>
              {/* <Link to={'/register'} >Sing Up</Link> */}
              Sing Up
                
              </button>
            </form>
          </div>
        </>
      ) : (
        <div className="border text-danger text-center">
          <h1>today is Sunday come tomarrow</h1>
        </div>
      )}
    </>
  );
 
}

export default Login;
