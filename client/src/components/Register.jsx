import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

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
      {/* Begin Register card  */}
      <div className="col-md-6 col-12 col-lg-4">
        <div className="card card-widget">
          <div className="card-header fw-bold">
            <div className="row justify-content-evenly align-items-center">
              <div className="col-6">
                Register <i className="fa-solid fa-user-plus"></i>
              </div>
              <div className="col-6 small">
                Has account?
                <NavLink to="/login"> Login</NavLink>
              </div>
            </div>
          </div>

          <div className="card-body">
            <form onSubmit={register}>
              <label className="form-label fw-bold mt-2">E-mail:</label>
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
              <label className="form-label fw-bold mt-2">Password:</label>
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
                className="btn btn-warning form-control mt-3"
              >
                Crear Cuenta
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Ends register card */}
    </div>
  );
};
