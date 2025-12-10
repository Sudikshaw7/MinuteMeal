import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isAuth = localStorage.getItem("foodbite_auth") === "true";
  return isAuth ? children : <Navigate to="/login" />;
}