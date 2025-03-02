import React from "react";

// class component
// class Test extends React.Component{
// //  have to a rendner method
// render(){
//     return <h1>Hello form class component</h1>
// }
// // }

// function component
// function Test() {
//     return (
//         <>
//         <h1 className="m-2">Hello from functional component</h1>
//         <ul>
//             <li className="btn btn-primary m-2">one</li>
//             <li className="btn btn-primary">one</li>
//             <li className="btn btn-primary">one</li>
//         </ul>
//         </>
//     );
// }

// export default Test;

// Loign

function Login() {
  function getDay(date = new Date()) {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  }
  return (
    <>
      {getDay() !== "Sunday" ? (
        <>
          <div className="container col-md-6 border p-3 mt-2">
            <h1 className="text-primary text-center">Sing In</h1>
            <form action="" method="post" className="row g-2">
              <div className="">
                <label htmlFor="username" className="form-label">
                  User name
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter Your user name "
                  className="form-control"
                />
                <br />
              </div>
              <div className="">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                  className="form-control"
                />
              </div>
              <button type="button" className="btn btn-primary">
                Sing In
              </button>
              <button type="button" className="btn btn-success">
                Sing Up
              </button>
            </form>
          </div>
        </>
      ) : (
        <div className="border text-danger text-center">
            <h1>
                today is  Sunday come tomarrow
            </h1>
        </div>
      )}
    </>
  );
}

export default Login;
