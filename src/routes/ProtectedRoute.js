import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("cosmos_admin_logged_in") === "true";
  return isAuthenticated ? children : <Navigate to="/admin-login" />;
};

export default ProtectedRoute;