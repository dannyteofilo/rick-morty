import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isValidPassword } from "../../helpers/common";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passworConfirm, setPasswordConfirm] = useState("");
  const [accept, setAccept] = useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      username,
      password,
      passworConfirm,
      accept,
      isPasswordValid,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
            setIsPasswordValid(isValidPassword(event.target.value));
          }}
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <input
          type="password"
          value={passworConfirm}
          onChange={(event) => setPasswordConfirm(event.target.value)}
        />
        <br />
        <input
          type="checkbox"
          checked={accept}
          onChange={(event) => setAccept(event.target.checked)}
        />
        <br />
        <button type="submit">Registrar</button>
      </form>
      <div>
        {!isPasswordValid && (
          <p>
            La contraseña debe tener al menos 8 caracteres, incluyendo
            mayúsculas, minúsculas, números y caracteres especiales
          </p>
        )}
      </div>
      <hr />
      <p>Ya tienes cuenta con nosotros?</p>
      <Link to="/auth/login">Iniciar Sesion</Link>
    </div>
  );
};

export default Register;
