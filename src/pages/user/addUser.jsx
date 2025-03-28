import { useState } from "react";

const ResjesterForm = () => {
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handelChange = (event) => {
    setFormdata({ ...formData, [event.target.name]: [event.target.value] });
  };
  const handerSubmit = (e) => {
    e.preventDefault();
    console.log("Your Data:", formData);
  };
  return (
    <div className="border p-2 m-3">
      <h1 className="display-3">Restration Form</h1>
      <form onSubmit={handerSubmit}>
        <div className="row p-2">
          <div className="form-group col-md-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handelChange}
              placeholder="Enter your name"
              className="form-control"
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handelChange}
              placeholder="Enter your Email"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group col-md-12 p-2">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handelChange}
            placeholder="Enter your Password"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary col-md-6 col-sm-12 col-12 p-2 ">
          Sing Up
        </button>
      </form>
      <p>{formData.email}</p>
    </div>
  );
};

export default ResjesterForm;
