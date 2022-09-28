import React, { createContext, useContext } from "react";
import { useState } from "react";

// Con este módulo se crea un estado global que permite la validación de logueo de un usuario y así poder determinar si se le muestra el resto de contenido de al aplicación.

// This module creates a global state that validates user login and allow display other interfaces options.

const UserContext = createContext();

export const UseProvider = (props) => {
  cosnt[(login, setLogin)] = useState(false);
  
};
