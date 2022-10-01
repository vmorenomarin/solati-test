import React, { createContext, useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

// This module creates a global state that validates user login and allow display other interfaces options.

const UserContext = createContext();
const initialState = { login: false, name: "", token: "", id: "" };

export const UserProvider = (props) => {
  const [user, setUser] = useState(initialState);

  useEffect(() => {
    const initial = JSON.parse(localStorage.getItem("user"));
    if (initial) {
      initial.login;
      setUser(initial);
    } else {
      setUser(initialState);
    }
  }, []);

  // Next lines build an object that can shared with other components.

  const value = {
    user,
    login,
    register,
    exit,
  };

  return <UserContext.Provider value={value} {...props} />;
};

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser error.");
  }
  return context;
}
