import React from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";
const logo = require("../assets/images/solati-logo.png");

export const Navbar = () => {
  const { user, exit } = useUser();
  return (
    <nav className="navbar navbar-expanded-md navbar-dark bg-light border-bottom border-warning">
      <NavLink className="navbar-brand text-dark" href="#">
        <img
          src={logo}
          className="img mx-3"
          style={{ width: "100px" }}
          to="/"
        />
        Currency Exchange
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
      ></button>
      {UserProvider.login}
    </nav>
  );
};
