import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateCompo() {
  const auth = localStorage.getItem("AuthUSerData");

  return <div>{auth ? <Outlet /> : <Navigate to={"/auth/login"} />}</div>;
}

export default PrivateCompo;
