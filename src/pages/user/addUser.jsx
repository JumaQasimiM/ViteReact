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
    <div className="m-4">
      <h1 className="display-3 text-center">Restration Form</h1>
      <form onSubmit={handerSubmit} className="row g-2">
        <div className="col-md-6">
          <label for="inputUN" className="form-label">
            User Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handelChange}
            id="inputUN"
            placeholder="Geben Sie die Benutzname ein"
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <label for="inputpass" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handelChange}
            id="inputpass"
            placeholder="Geben Sie die Password ein"
            className="form-control"
          />
        </div>

        <div class="col-12">
          <label for="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="HauptStraße 12. 70872 Stuttgart"
          />
        </div>
        {/* Address */}
        <div class="col-md-4">
          <label for="inputStraße" className="form-label">
            Straße
          </label>
          <input
            type="text"
            placeholder="Geben Sie die Adresse ein"
            className="form-control"
            id="inputStraße"
          />
        </div>
        <div class="col-md-2">
          <label for="inputHausNo" className="form-label">
            Haus No
          </label>
          <input
            type="number"
            placeholder="Geb die Haus-no ein"
            className="form-control"
            id="inputHausNo"
          />
        </div>
        <div class="col-md-2">
          <label for="inputPLZ" className="form-label">
            PLZ
          </label>
          <input
            type="number"
            placeholder="Geb die PLZ ein"
            className="form-control"
            id="inputPLZ"
          />
        </div>
        <div class="col-md-4">
          <label for="inputCity" className="form-label">
            Ort
          </label>
          <input
            type="text"
            placeholder="Geb die Ort ein"
            className="form-control"
            id="inputCity"
          />
        </div>
        {/* Email */}
        <div className="col-md-12">
          <label for="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handelChange}
            id="inputEmail"
            placeholder="Geben Sie die Email ein"
            className="form-control"
          />
        </div>

        <div className="col-12">
        <button
          type="submit"
          className="btn btn-primary"
        >
          Sing Up
        </button>
        </div>
      </form>
      <p className="bg-warning p-3 m-2">Ihre Email : {formData.email}</p>
    </div>
  );
};

export default ResjesterForm;
