import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

import logo from "../assets/images/solati-logo.png";

export const Register = () => {
  const navigate = useNavigate();

  const initialData = {
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialData);
  const { registerUser } = useUser();

  const register = (e) => {
    e.preventDefault();
    registerUser(userData);
    navigate("/");
  };
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="d-flex flex-wrap justify-content-around align-items-center">
          <div>
            <img
              src={logo}
              className="img img-fluid"
              style={{ height: "100px" }}
              alt=""
            />
          </div>
          <div className="col-md-6 col-12 col-lg-8">
            <div className="header-2">
              <h1 className="fw-bold">Currency Exchange</h1>
              <h3>
                Crea una cuenta y haz cosultas sobre cambios de moneda y obtén
                tu registro de consultas.
              </h3>
            </div>
          </div>

          {/* Begin Register card  */}
          <div className="col-md-6 col-12 col-lg-4">
            <div className="card card-widget">
              <div className="card-header fw-bold">
                <div className="row justify-content-evenly align-items-center">
                  <div className="col-6">
                    Registrarse <i className="fa-solid fa-user-plus"></i>
                  </div>
                  <div className="col-6 small">
                    ¿Ya tienes cuenta?
                    <NavLink to="/login" className="icon-color"> Iniciar sesión</NavLink>
                  </div>
                </div>
              </div>

              <div className="card-body">
                <form onSubmit={register}>
                  <label className="form-label fw-bold mt-2">
                    Correo electrónico:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    required
                    placeholder="Example: mail@mail.com."
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        email: e.target.value,
                      })
                    }
                    value={userData.email}
                  />
                  <label className="form-label fw-bold mt-2">Contraseña:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    required
                    placeholder="Type your password"
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        password: e.target.value,
                      })
                    }
                    value={userData.password}
                  />
                  <button
                    type="submit"
                    className="btn btn-solati form-control mt-3"
                  >
                    Crear Cuenta
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* Ends register card */}
        </div>
      </div>
    </div>
  );
};
