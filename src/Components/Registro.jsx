import React, { useState } from "react";

const Registro = () => {

  const [user, setUser] = useState({
    nombre: "",
    apellido:"",
    email: "",
    contrasenia:"",
    verificarContrasenia:"",

});
const [formErrors, setFormErrors] = useState({
    nombre: '',
    apellido: '',
    email: '',
    contrasenia: '',
    verificarContrasenia: '',
  });




  const handleSubmit = (event) => {
    event.preventDefault();

    
      const validateForm = () => {
        let valid = true;
        const errors = {
          nombre: '',
          apellido: '',
          email: '',
          contrasenia: '',
          verificarContrasenia: '',
        };
    
        if (!user.nombre) {
          errors.nombre = 'El nombre es obligatorio';
          valid = false;
        }
    
        if (!user.apellido) {
          errors.apellido = 'El apellido es obligatorio';
          valid = false;
        }
    
        if (!user.email) {
          errors.email = 'El email es obligatorio';
          valid = false;
        } else if (!/\S+@\S+\.\S+/.test(user.email)) {
          errors.email = 'El email no es válido';
          valid = false;
        }
    
        if (!user.contrasenia) {
          errors.password = 'La contraseña es obligatoria';
          valid = false;
        } else if (user.contrasenia.length < 6) {
          errors.contrasenia = 'La contraseña debe tener al menos 6 caracteres';
          valid = false;
        }
    
        if (!user.verificarContrasenia) {
          errors.verificarContrasenia = 'Debes confirmar la contraseña';
          valid = false;
        } else if (user.contrasenia !== user.verificarContrasenia) {
          errors.verificarContrasenia = 'Las contraseñas no coinciden';
          valid = false;
        }
    
        setFormErrors(errors);
        return valid;
      };
    
    
    
        if (validateForm()) {
          // Realizar acciones adicionales con los datos del formulario
          console.log('Formulario enviado:', user);
        } else {
          // Mostrar un mensaje de error o realizar otras acciones
          console.log('El formulario contiene errores');
        }
      };
 

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          onChange={(event) =>
            setUser({ ...user, nombre: event.target.value })
        }
        
        />
        {formErrors.nombre && <span className="error">{formErrors.nombre}</span>}
        <label>Apellido</label>
        <input
          type="text"
          onChange={(event) =>
            setUser({ ...user, apellido: event.target.value })
          }
        />
        {formErrors.apellido && <span className="error">{formErrors.apellido}</span>}

        <label>Email</label>
        <input
          type="email"
          onChange={(event) => setUser({ ...user, email: event.target.value })}
        />
        {formErrors.email && <span className="error">{formErrors.email}</span>}

        <label>Contraseña</label>
        <input
          type="password"
          onChange={(event) =>
            setUser({ ...user, contrasenia: event.target.value })
          }
        />
        {formErrors.contrasenia && <span className="error">{formErrors.contrasenia}</span>}
        <label>Verifique la contraseña</label>
        <input
          type="password"
          onChange={(event) =>
            setUser({ ...user, verificarContrasenia: event.target.value })
          }
        />
        {formErrors.verificarContrasenia && <span className="error">{formErrors.verificarContrasenia}</span>}


        <button className="favButton">Enviar</button>
    </form>
    </>
  );
};

export default Registro;
