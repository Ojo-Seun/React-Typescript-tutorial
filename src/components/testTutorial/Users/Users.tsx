import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState<string[]>([]);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const fetchUsers = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((users) => {
          setUsers(users.map((user: { username: string }) => user.username));
        })
        .catch((err) => setErr(true));
    };

    fetchUsers();
  }, []);
  return (
    <>
      <pre>{err && "Error In Connection"}</pre>
      <button disabled={true}>Disabled</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.toUpperCase()}</li>
        ))}
      </ul>
    </>
  );
}

export default Users;
