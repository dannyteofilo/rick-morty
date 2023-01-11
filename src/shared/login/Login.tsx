import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          placeholder="Usiario o contrasena"
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <input
          type="password"
          value={password}
          placeholder="Contrasena"
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Iniciar sesión</button>
      </form>
      <hr />
      <p>Aun no tienes cuenta con nosotros?</p>
      <Link to="/auth/register">Registrate aqui</Link>
    </div>
  );
};

export default Login;
