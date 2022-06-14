import React from "react";
import "./NavBar.css";
import CardWidget from "../CardWidget/CardWidget";

import logo from "./Rammstein_logo-min.png";

function NavBar() {
  return (
    <header className="bg-light">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
          <a
            href="/"
            className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-decoration-none text-dark"
          >
            <img className="bi me-2 logo" src={logo} alt="logo" />
            <span className="fs-4">e-Rammstein</span>
          </a>
          <ul class="nav nav-pills">
            <li className="nav-item">
              <a
                href="/"
                className="nav-link px-2 link-dark"
                aria-current="page"
              >
                Merchandising
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link px-2 link-dark">
                Discos
              </a>
            </li>
          </ul>
          <CardWidget />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
