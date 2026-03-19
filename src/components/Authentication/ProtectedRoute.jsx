import React from "react";
import  useAuth  from "./useAuth";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
