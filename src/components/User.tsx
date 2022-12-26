import { useState } from "react";

interface User {
  uid: string;
  name: string;
}

const tempUser: User = {
  uid: "ASD789",
  name: "Jorgito Martinez",
};

const User = () => {
  const [user, setUser] = useState<User>();
  const login = () => {
    setUser({
      uid: "ABC123",
      name: "Juan Perez",
    });
  };
  return (
    <div className="mt-5">
      <h3>Usuario: useState</h3>
      <button onClick={login} className="btn btn-outline-primary">
        Login
      </button>
      {!user ? <pre>No user</pre> : <pre>{JSON.stringify(user)}</pre>}
    </div>
  );
};

export default User;
