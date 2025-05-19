import { useState, useEffect } from "react";
import UserCard from "../../components/user";
import { Link } from "react-router-dom";

const UserPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        // for limit users only 3 users
        setUsers(data.slice(0, 2));
      })

      .catch((error) => console.log(error));
  }, []); // end useEffect

  return (
    <div>
      <h1 className="text-center p-3">Users List (from API)</h1>
      {users.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        users.map((user) => (
          <div>
            <UserCard key={user.id} id = {user.id}name={user.name} email={user.email} />
          </div>
        ))
      )}
      <button className="btn btn-outline-success m-3"><Link to={'/register'}>Add User</Link> </button>
    </div>
  );
};

export default UserPage;
