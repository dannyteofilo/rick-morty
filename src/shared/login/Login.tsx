import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../../hooks/useAppContext";

export const Login = () => {
  const { signIn } = useAppContext();
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signIn(username, () => navigate(from, { replace: true }));
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
