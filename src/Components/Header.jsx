import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <div className='header'>
        <div className='headerContainer'>
        <Link to="/">
        <img src="./Digital Booking.png" alt="logotipo Digital Booking" />
        </Link>
        <div className='headerBtn'>
        <button className='cuentaBtn'>Crear cuenta</button>
        <button className='sesionBtn'>Iniciar sesión</button>
        </div>
        </div>
    </div>
  )
}

export default Header