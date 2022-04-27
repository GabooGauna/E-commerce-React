import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <>
      <div className='site-nav'>
        <a className='link' href='#'>Inicio</a>
        <a className='link' href='#'>Productos</a>
        <a className='link' href='#'>Nosotros</a>
      <CartWidget />
      </div>
    </>
  )
}

export default NavBar;