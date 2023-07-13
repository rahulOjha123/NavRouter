import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="Main">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <h3 className="navbar-brand" to="#">
            Logo
          </h3>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" exact to="/">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/gallary">
                  Gallary
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/information">
                  Information
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
