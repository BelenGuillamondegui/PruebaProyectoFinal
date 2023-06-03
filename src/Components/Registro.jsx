import React, { useState,useEffect } from "react";


const Registro = () => {

  const [user, setUser] = useState({
    name: "",
    lastName:"",
    email: "",
    password:"",
    checkPassword:"",

});
const [formErrors, setFormErrors] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    checkPassword: '',
  });


  // useEffect(() => {
  //   const storedEmail = localStorage.getItem("email");
  //   const storedPassword = localStorage.getItem("password");

  //   if (storedEmail && storedPassword) {
  //     setUser({
  //       ...user,
  //       email: storedEmail,
  //       contrasenia: storedPassword,
  //       verificarContrasenia: storedPassword,
  //     });
  //   }
  // }, []);




  const handleSubmit = (event) => {
    event.preventDefault();

    
      const validateForm = () => {
        let isValid = true;
        const errors = {
          name: '',
          lastName: '',
          email: '',
          password: '',
          checkPassword: '',
        };
        const nameRegex = /^[a-zA-ZáÁéÉíÍóÓúÚñÑüÜ'][a-zA-ZáÁéÉíÍóÓúÚñÑüÜ\s']*$/;

     
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/; 
    
        if (!user.name) {
          errors.name = 'El nombre es obligatorio';
          isValid = false;
        }else if (user.name.trim() !== user.name) {
          errors.name = 'El nombre no debe contener espacios al principio';
          isValid = false;
          }else if (!nameRegex.test(user.name)) {
            errors.name = 'El nombre contiene caracteres no válidos';
            isValid = false;
          }


        if (!user.lastName) {
          errors.lastName = 'El apellido es obligatorio';
          isValid = false;
        }else if (user.lastName.trim() !== user.lastName) {
            errors.lastName = 'El apellido no debe contener espacios al principio';
            isValid = false;
        } else if (!nameRegex.test(user.lastName)) {
            errors.lastName = 'El apellido contiene caracteres no válidos';
            isValid = false;
          }
    
        if (!user.email) {
          errors.email = 'El email es obligatorio';
         isValid = false; 
        } else if (!/\S+@\S+\.\S+/.test(user.email)) {
          errors.email = 'El email no es válido';
          isValid = false;
        }
    
        if (!user.password) {
          errors.password = 'La contraseña es obligatoria';
          isValid = false;
        }else if (user.password.trim() !== user.password) {
            errors.password = 'La contraseña no debe contener espacios';
            isValid = false; 
        } else if (user.password.length < 6) {
            errors.password = 'La contraseña debe tener al menos 6 caracteres';
            isValid = false;
        } else if (!passwordRegex.test(user.password)) {
            errors.password = 'La contraseña debe contener letras y números';
            isValid = false;
        
        }

        if (!user.checkPassword) {
          errors.checkPassword = 'Debes confirmar la contraseña';
          isValid = false;
        }else if (user.checkPassword.trim() !== user.checkPassword) {
            errors.checkPassword = 'La contraseña no debe contener espacios al principio';
            isValid = false; 
        } else if (user.password !== user.checkPassword) {
          errors.checkPassword = 'Las contraseñas no coinciden';
          isValid = false;
        }
    
        setFormErrors(errors);
        return isValid;
      };
    
    
    
        if (validateForm()) {
          localStorage.setItem("email", user.email);
      localStorage.setItem("password", user.contrasenia);
          // Realizar acciones adicionales con los datos del formulario
          console.log('Formulario enviado:', user);
        } else {
          // Mostrar un mensaje de error o realizar otras acciones
          console.log('El formulario contiene errores');
        }
      };
 

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <label className="form-label">Nombre (ingrese el nombre sin espacios ni tildes)</label>
        <input className="form-input"
          type="text"
          onChange={(event) =>
            setUser({ ...user, nombre: event.target.value })
        }
        
        />
        {formErrors.nombre && <span className="form-error">{formErrors.nombre}</span>}
        <label className="form-label">Apellido</label>
        <input className="form-input"
          type="text"
          onChange={(event) =>
            setUser({ ...user, apellido: event.target.value })
          }
        />
        {formErrors.apellido && <span className="form-error">{formErrors.apellido}</span>}

        <label className="form-label">Email</label>
        <input className="form-input"
          type="email"
          onChange={(event) => setUser({ ...user, email: event.target.value })}
        />
        {formErrors.email && <span className="form-error">{formErrors.email}</span>}

        <label className="form-label">Contraseña</label>
        <input className="form-input"
          type="password"
          onChange={(event) =>
            setUser({ ...user, contrasenia: event.target.value })
          }
        />
        {formErrors.contrasenia && <span className="form-error">{formErrors.contrasenia}</span>}
        <label className="form-label">Verifique la contraseña</label>
        <input className="form-input"
          type="password"
          onChange={(event) =>
            setUser({ ...user, verificarContrasenia: event.target.value })
          }
        />
        {formErrors.verificarContrasenia && <span className="form-error">{formErrors.verificarContrasenia}</span>}


        <button className="form-submit-button">Enviar</button>
    </form>
    </>
  );
};

export default Registro;


// const handleSubmit = async () => {
//   const {
//     productName,
//     brand,
//     productPrice,
//     selectedCategory,
//     selectedCategoryId,
//     selectedCondition,
//     description,
//     selectedImage,
//     fileName
//   } = formData;

//   const productData = {
//     name: productName,
//     brand: brand,
//     price: productPrice,
//     category: selectedCategory,
//     idCategory: selectedCategoryId,
//     state: selectedCondition,
//     description: description,
//     image: selectedImage,
//     fileName: fileName,
//   };
//   console.log("Datos del producto:", productData);

//   try {
//     await axios.post(
//       "http://localhost:8080/digitalbooking/product",
//       productData
//     );
//     console.log("Producto registrado con éxito:", productData);

//     // Reiniciar los campos del formulario después de enviar los datos
//     setFormData({
//       selectedCategory: "",
//       selectedCondition: "",
//       productName: "",
//       productPrice: "",
//       selectedImage: null,
//       description: "",
//       brand: "",
//     });
//   } catch (error) {
//     console.log(error.response.data);
//     console.error("Error al registrar el producto:", error);
//   }
// };