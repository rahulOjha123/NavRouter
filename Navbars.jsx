import React from "react";
import {  NavLink } from "react-bootstrap";
import "./Navbars.css"

const Navbars = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>Communication</h2>
        </div>
        <div className="menu-link">
          {/* <ul>
            <li>
              <NavLink to="">Home</NavLink>
            </li>
            <li>
              <NavLink to="">Home</NavLink>
            </li>
            <li>
              <NavLink to="">Home</NavLink>
            </li>
          </ul> */}
          
        </div>
        <div className="social-media">
            <ul>
                <li><NavLink exact to="/navlogout">LogOut</NavLink></li>
                <li><NavLink exact to="/navsigin">Sigin</NavLink></li>
            </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbars;
