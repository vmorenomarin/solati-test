import React from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";
const logo = require("../assets/images/solati-logo.png");

export const Navbar = () => {
  const { user, exit } = useUser();

  return (
    <div>
      <nav className="navbar navbar-expand-md bg-light border border-bottom border-warning">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-dark" to="/">
            <img
              src={logo}
              className="img mx-3"
              style={{ width: "100px" }}
            />
            Currency Exchange
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {user.login ? (
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav me-auto mb-2 mb-large-0">
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    to="/"
                    role="button"
                    aria-expanded="false"
                    id="noteDrop"
                  >
                    Note Actions
                  </NavLink>
                  <ul className="dropdown-menu" aria-labelledby="noteDrop">
                    <li>
                      <NavLink to="/operations" className="dropdown-item">
                        My operations
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/actions" className="dropdown-item">
                        New Query
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item me-3">
                  <NavLink
                    className="nav-link"
                    to="/operations"
                    activeClassName="active"
                  >
                    <i className="bi bi-person"></i> Welcome, {user.mail}
                  </NavLink>
                </li>
                <li className="nav-item mr-3">
                  <NavLink
                    className="nav-link"
                    to="/"
                    activeClassName="active"
                    onClick={() => exit()}
                  >
                    Log out <i className="bi bi-box-arrow-right"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
          ) : (
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav ms-auto mb-2 mb-large-0">
                <li className="nav-item me-3">
                  <NavLink className="nav-link" to="/login" activeClassName="active">
                    Log in <i className="bi bi-box-arrow-in-right"></i>
                  </NavLink>
                </li>

                <li className="nav-item me-3">
                  <NavLink className="nav-link" to="/register">
                    Register <i className="bi bi-person"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};
