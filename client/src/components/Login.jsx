import React from "react";
import { useState } from "react";
import { useUser } from "../context/UserContext";

export const Login = () => {
  const initialData = { email: "", password: "" };
  const [userData, setUserData] = useState(initialData);
  const { loginUser } = useUser();

  const login = (e) => {
    e.preventDefault();
    const user = userData;
    login(user);
  };
  return true;
};
