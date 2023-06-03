import React, { useState } from "react";

const IniciarSesion = () => {
  const [user, setUser] = useState({
    email: "",
    contrasenia: "",
  });
  const [formError, setFormError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    // Validar el correo electrónico y la contraseña
    if (user.email === storedEmail && user.contrasenia === storedPassword) {
      // Inicio de sesión exitoso
      setLoginSuccess(true);

      console.log("Inicio de sesión exitoso");
      // Realizar acciones adicionales, como redireccionar a la página principal
    } else {
      // Error de inicio de sesión
      setFormError("El correo electrónico o la contraseña son incorrectos");
    }
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <label className="form-label">Correo Electrónico</label>
        <input
          className="form-input"
          type="email"
          value={user.email}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
        />

        <label className="form-label">Contraseña</label>
        <input
          className="form-input"
          type="password"
          value={user.contrasenia}
          onChange={(event) =>
            setUser({ ...user, contrasenia: event.target.value })
          }
        />

        {formError && <span className="form-error">{formError}</span>}

        <button className="form-submit-button">Iniciar Sesión</button>
      {loginSuccess && <h1>Inicio de sesión exitoso</h1>}
      </form>

    </>
  );
};

export default IniciarSesion;