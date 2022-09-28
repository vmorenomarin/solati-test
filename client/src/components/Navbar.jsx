import React from "react";
import { NavLink } from "react-router-dom";
const logo = require("../assets/images/solati-logo.png");

export const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expanded-md navbar-dark bg-light">
        <div>
          {/* <NavLink className="navbar-brand" to="/"> */}
          <img src={logo} className="img img-fluid mx-3"  style={{ width: "100px" }}/>
          Currency Exchange

          {/* </NavLink> */}
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        ></button>
      </nav>
    </header>
  );
};
