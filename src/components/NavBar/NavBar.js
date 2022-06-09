import React from "react";
import "./NavBar.css";

import logo from "./Rammstein_logo-min.png";

function NavBar() {
  return (
    <header className="bg-light">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center py-3 mb-4">
          <a
            href="/"
            className="d-flex align-items-center col-md-6 mb-2 mb-md-0"
          >
            <img className="logo" src={logo} alt="logo" />
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
        </div>
      </div>
    </header>
  );
}

export default NavBar;
