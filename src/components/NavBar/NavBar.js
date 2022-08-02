import React from "react";
import { Link } from "react-router-dom"

//CSS
import "./NavBar.css";

//Component
import CardWidget from "../CardWidget/CardWidget";

//Imagen
// import logo from "../../../public/assets/Rammstein_logo-min.png";

function NavBar() {
  return (
    <header className="bg-light">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
          <Link
            to="/"
            className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-decoration-none text-dark"
          >
            <img className="bi me-2 logo" src={"http://localhost:3000/assets/Rammstein_logo-min.png"} alt="logo" />
            <span className="fs-4">e-Rammstein</span>
          </Link>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link
                to={`/category/merchandesing`}
                className="nav-link px-2 link-dark"
                aria-current="page"
              >
                Merchandising
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/category/disco`} className="nav-link px-2 link-dark">
                Discos
              </Link>
            </li>
          </ul>
          <CardWidget />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
