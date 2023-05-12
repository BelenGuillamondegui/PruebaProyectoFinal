import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <div className='header'>
        <Link to="/">
        <img src="./logotipo.png" alt="logotipo empresa" />
        </Link>
        <div className='headerBtn'>
        <button className='cuentaBtn'>Crear cuenta</button>
        <button className='sesionBtn'>Iniciar sesión</button>
        </div>
    </div>
  )
}

export default Header