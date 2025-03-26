import React from "react";
const UserCard = ({ id,name, email = "juma@yahoo.com" }) => {
  return (
    <div className="p-3 m-3 border">
      <table className="table">
        <thead className="th    ">
          <tr className="table-info">
          <th scope="col">No</th>
          <th scope="col">user name</th>
          <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
         <tr className="table-light">
         <th scope="row">{id}</th>
          <th >{name}</th>
          <th >{email}</th>
         </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserCard;
