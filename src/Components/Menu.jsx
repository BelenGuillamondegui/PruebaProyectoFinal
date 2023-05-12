// import React, { useState } from 'react';

// function NavBar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const handleMenuClick = () => {
//     setMenuOpen(!menuOpen);
//   }

//   return (
//     <nav>
//       {/* <div className="logo"></div> */}
//       <button className="menu-button" onClick={handleMenuClick}>
//         <span className="menu-icon"></span>
//       </button>
//       <ul className={menuOpen ? "menu-list open" : "menu-list"}>
//         <li>Inicio</li>
//         <li>Nosotros</li>
//         <li>Servicios</li>
//         <li>Contacto</li>
//       </ul>
//     </nav>
//   );

// }
// export default NavBar
import React from "react";
const Menu = () => {
  return (
    <div>
      <nav>
        <input type="checkbox" id="menu" />
        <label for="menu">
          {" "}
          ☰ {" "}
        </label>
        <ul>
          <li>Crear cuenta</li>
          <li>Iniciar sesión</li>
          
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
