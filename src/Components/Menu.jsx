
import React from "react";
const Menu = () => {
  return (
    <div>
      <nav>
        <input type="checkbox" id="menu" />
        <label className="menuIcon" for="menu">
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
