import React from "react";
import { useUser } from "../context/UserContext";
import logo from "../assets/images/solati-logo.png";
import { Operations } from "./Operations";

export const Home = () => {
  const { user } = useUser();
  return (
    <div className="container">
      {!user.login ? (
        <div className="row mt-3 bg-alert">
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
                  Inicia sesión y haz cosultas sobre cambios de moneda y obtén
                  tu registro de consultas.
                </h3>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Operations />
      )}
    </div>
  );
};
