// import React, { useState,useEffect } from "react";
// import axios from 'axios';
// import jwt from 'jsonwebtoken';


// const RegistroToken = () => {

//   const [user, setUser] = useState({
//     nombre: "",
//     apellido:"",
//     email: "",
//     contrasenia:"",
//     verificarContrasenia:"",

// });
// const [formErrors, setFormErrors] = useState({
//     nombre: '',
//     apellido: '',
//     email: '',
//     contrasenia: '',
//     verificarContrasenia: '',
//   });



//   const handleSubmit = async (event) => {
//     event.preventDefault();

//   const user = {
//     nombre: '',
//     apellido: '',
//     email: '',
//     contrasenia: '',
//     verificarContrasenia: '',
//   };
//   console.log("Datos del usuario:", user);

//   try {
//     await axios.post(
//     //   "http://localhost:8080/digitalbooking/product",
//       user
//     );
//     console.log("usuario registrado con éxito:", user);

//     // Reiniciar los campos del formulario después de enviar los datos
//     setUser({
//         nombre: '',
//         apellido: '',
//         email: '',
//         contrasenia: '',
//         verificarContrasenia: '',
//     });
//   } catch (error) {
//     console.log(error.response.data);
//     console.error("Error al registrar el producto:", error);
//   }
// };

   
    
//       const validateForm = () => {
//         let valid = true;
//         const errors = {
//           nombre: '',
//           apellido: '',
//           email: '',
//           contrasenia: '',
//           verificarContrasenia: '',
//         };
//         const nameRegex = /^[a-zA-ZáÁéÉíÍóÓúÚñÑüÜ'][a-zA-ZáÁéÉíÍóÓúÚñÑüÜ\s']*$/;

//         // /^[a-zA-ZáÁéÉíÍóÓúÚñÑüÜ']{1}[a-zA-ZáÁéÉíÍóÓúÚñÑüÜ\s']*$/;

     
//   const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/; // Expresión regular para letras y números
    
//         if (!user.nombre) {
//           errors.nombre = 'El nombre es obligatorio';
//           valid = false;
//         }else if (user.nombre.trim() !== user.nombre) {
//           errors.nombre = 'El nombre no debe contener espacios al principio';
//           valid = false;
//           }else if (!nameRegex.test(user.nombre)) {
//             errors.nombre = 'El nombre contiene caracteres no válidos';
//             valid = false;
//           }

//         if (!user.apellido) {
//           errors.apellido = 'El apellido es obligatorio';
//           valid = false;
//         }else if (user.apellido.trim() !== user.apellido) {
//             errors.apellido = 'El apellido no debe contener espacios al principio';
//             valid = false;
//         } else if (!nameRegex.test(user.apellido)) {
//             errors.apellido = 'El apellido contiene caracteres no válidos';
//             valid = false;
//           }
    
//         if (!user.email) {
//           errors.email = 'El email es obligatorio';
//          valid = false; 
//         } else if (!/\S+@\S+\.\S+/.test(user.email)) {
//           errors.email = 'El email no es válido';
//           valid = false;
//         }
    
//         if (!user.contrasenia) {
//           errors.contrasenia = 'La contraseña es obligatoria';
//           valid = false;
//         }else if (user.contrasenia.trim() !== user.contrasenia) {
//             errors.contrasenia = 'La contraseña no debe contener espacios';
//             valid = false; 
//         } else if (user.contrasenia.length < 6) {
//             errors.contrasenia = 'La contraseña debe tener al menos 6 caracteres';
//             valid = false;
//         } else if (!passwordRegex.test(user.contrasenia)) {
//             errors.contrasenia = 'La contraseña debe contener letras y números';
//             valid = false;
        
//         }

//         if (!user.verificarContrasenia) {
//           errors.verificarContrasenia = 'Debes confirmar la contraseña';
//           valid = false;
//         }else if (user.verificarContrasenia.trim() !== user.verificarContrasenia) {
//             errors.verificarContrasenia = 'La contraseña no debe contener espacios al principio';
//             valid = false; 
//         } else if (user.contrasenia !== user.verificarContrasenia) {
//           errors.verificarContrasenia = 'Las contraseñas no coinciden';
//           valid = false;
//         }
    
//         setFormErrors(errors);
//         return valid;
//       };
    
    
//         if (validateForm()) {
          
//           // Realizar acciones adicionales con los datos del formulario
//           console.log('Formulario enviado:', user);
//         } else {
//           // Mostrar un mensaje de error o realizar otras acciones
//           console.log('El formulario contiene errores');
//         }
//       };
 

//   return (
//     <>
//       <form className="form-container" onSubmit={handleSubmit}>
//         <label className="form-label">Nombre (ingrese el nombre sin espacios ni tildes)</label>
//         <input className="form-input"
//           type="text"
//           onChange={(event) =>
//             setUser({ ...user, nombre: event.target.value })
//         }
        
//         />
//         {formErrors.nombre && <span className="form-error">{formErrors.nombre}</span>}
//         <label className="form-label">Apellido</label>
//         <input className="form-input"
//           type="text"
//           onChange={(event) =>
//             setUser({ ...user, apellido: event.target.value })
//           }
//         />
//         {formErrors.apellido && <span className="form-error">{formErrors.apellido}</span>}

//         <label className="form-label">Email</label>
//         <input className="form-input"
//           type="email"
//           onChange={(event) => setUser({ ...user, email: event.target.value })}
//         />
//         {formErrors.email && <span className="form-error">{formErrors.email}</span>}

//         <label className="form-label">Contraseña</label>
//         <input className="form-input"
//           type="password"
//           onChange={(event) =>
//             setUser({ ...user, contrasenia: event.target.value })
//           }
//         />
//         {formErrors.contrasenia && <span className="form-error">{formErrors.contrasenia}</span>}
//         <label className="form-label">Verifique la contraseña</label>
//         <input className="form-input"
//           type="password"
//           onChange={(event) =>
//             setUser({ ...user, verificarContrasenia: event.target.value })
//           }
//         />
//         {formErrors.verificarContrasenia && <span className="form-error">{formErrors.verificarContrasenia}</span>}


//         <button className="form-submit-button">Enviar</button>
//     </form>
//     </>
//   );

// export default RegistroToken;
