import React from "react";
import { Navigate } from "react-router-dom";

let isauth;

isauth = null;
isauth = true;

const PrivateRoute = ({ component: Component }) => {
  return isauth ? <Component /> : <Navigate to="/Form" />;
};

export default PrivateRoute;
