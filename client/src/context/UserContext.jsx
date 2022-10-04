import React, { createContext, useContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

// This module creates a global state that validates user login and allow display other interfaces options.

const UserContext = createContext();
const initialState = { login: false, email: "", token: "", id: "" };

export const UserProvider = (props) => {
  const [user, setUser] = useState(initialState);

  useEffect(() => {
    const initial = JSON.parse(localStorage.getItem("user"));
    initial ? setUser(initial) : setUser(initialState);
  }, []);

  const loginUser = async (user) => {
    try {
      const { data } = await axios.post("/customer/login", user);
      if (data.ok) {
        const userLogin = {
          login: true,
          email: data.data.email,
          id: data.data.id,
          token: data.data.token,
        };
        localStorage.setItem("user", JSON.stringify(userLogin));
        alert(data.message);
      }
    } catch (error) {
      if (!error.response.data.ok) {
        return alert(error.response.data.message);
      }
    }
  };

  const registerUser = async (user) => {
    try {
      const { data } = await axios.post("/customer/register", user);
      if (data.ok) {
        const userLogin = {
          login: true,
          email: data.data.name,
          token: data.data.token,
          id: data.data.id,
        };
        localStorage.setItem("user", JSON.stringify(userLogin));
        setUser(userLogin);
        alert(data.message);
      }
    } catch (error) {
      if (!error.response.data.ok) {
        return alert(error.response.data.message);
      }
    }
  };

  const exit = () => {
    localStorage.removeItem("user");
    setUser(initialState);
  };

  // // Next lines build an object that can shared with other components.

  const value = {
    user,
    loginUser,
    registerUser,
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
