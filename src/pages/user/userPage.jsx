import { useState, useEffect } from "react";
import UserCard from "../../components/user";

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
      <h1>Users List fetch from API</h1>
      {users.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        users.map((user) => (
          <div>
            <UserCard key={user.id} id = {user.id}name={user.name} email={user.email} />
          </div>
        ))
      )}
    </div>
  );
};

export default UserPage;
