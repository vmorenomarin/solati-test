import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";
const logo = require("../assets/images/solati-logo.png");

export const Navbar = () => {
  const { user, exit } = useUser();

  return (
    <div>
      <nav className="navbar navbar-expand-md bg-light border border-bottom border-warning">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-dark" to="/">
            <img src={logo} className="img mx-3" style={{ width: "100px" }} alt=""/>
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
              {/* <ul className="navbar-nav me-auto mb-2 mb-large-0">
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle icon-color"
                    data-bs-toggle="dropdown"
                    to="/"
                    role="button"
                    aria-expanded="false"
                    id="noteDrop"
                  >
                    Acciones
                  </NavLink>
                  <ul className="dropdown-menu" aria-labelledby="noteDrop">
                    <li>
                      <Link to={"/operations/"+user.id} className="dropdown-item">
                        Mis consultas
                      </Link>
                    </li>
                    <li>
                      <NavLink to="/chat" className="dropdown-item">
                        Nueva consulta
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul> */}
              <ul className="navbar-nav ms-auto">
                <li className="nav-item me-3">
                  <NavLink
                    className="nav-link text-secondary"
                    to={"/operations/"+user.id}
                    activeClassName="active"
                  >
                    <i className="fa fa-user"></i> Bienvenido, {user.email}
                  </NavLink>
                </li>
                <li className="nav-item mr-3">
                  <NavLink
                    className="nav-link icon-color"
                    to="/"
                    activeClassName="active"
                    onClick={() => exit()}
                  >
                    Cerar sesión <i className="fa fa-sign-out"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
          ) : (
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav ms-auto mb-2 mb-large-0">
                <li className="nav-item me-3">
                  <NavLink
                    className="nav-link text-secondary"
                    to="/login"
                    activeClassName="active"
                  >
                    Iniciar sesión <i className="fa fa-right-to-bracket"></i>
                  </NavLink>
                </li>

                <li className="nav-item me-3">
                  <NavLink className="nav-link text-secondary" to="/register">
                    Registrarse <i className="fa-solid fa-user-plus secondary"></i>
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
