import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

function NavBar() {
  return (
    <>
      <header className='header p-2 container-fluid text-center'>
          <h1 className='fw-bold'>DevShirts</h1>
      </header>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item mx-3">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item nav-item mx-3">
                <a className="nav-link" href="#">
                  Nosotros
                </a>
              </li>
              <li className="nav-item nav-item mx-3">
                <a className="nav-link " href="#">
                  Productos
                </a>
              </li>
              <li className="nav-item nav-item mx-3">
                <a className="nav-link" href="#">
                  <CartWidget />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;