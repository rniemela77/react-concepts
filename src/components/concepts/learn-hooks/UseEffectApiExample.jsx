import { useState, useEffect } from "react";

function UseEffectApiExample() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <p>
        <b>{users.length} users:</b> {users.map((u) => u.name).join(", ")}
      </p>
    </div>
  );
}

export default UseEffectApiExample;
