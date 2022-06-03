import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContextProvider";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

function NavBar() {
  const { totalCount } = useCartContext();
  return (
    <>
      <header className="header p-2 container-fluid text-center">
        <Link to="/">
          <h1 className="fw-bold">DevShirts</h1>
        </Link>
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
                <Link to="/" className="text-black">
                  Home
                </Link>
              </li>
              <li className="nav-item nav-item mx-3">
                <Link to="/category/detalles" className="text-black">
                  Detalle
                </Link>
              </li>
              <li className="nav-item nav-item mx-3">
                <Link to="/cart" className="text-black">
                  {totalCount() > 0 && <CartWidget />}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid categorias ">
        <ul className="d-flex justify-content-center align-items-center m-2">
          <li className="nav-item nav-item mx-3">
            <Link to="/category/masVendidos" className="text-black">
              Más Vendidos
            </Link>
          </li>
          <li className="nav-item nav-item mx-3">
            <Link to="/category/otros" className="text-black">
              Otros
            </Link>
          </li>
          <li className="nav-item nav-item mx-3">
            <Link to="/category/nuevosIngresos" className="text-black">
              Nuevos Ingresos
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
