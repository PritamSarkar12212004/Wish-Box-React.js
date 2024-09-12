import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateCompo() {
  const auth = localStorage.getItem("userData");
  return <div>{auth ? <Outlet /> : <Navigate to={"/login"} />}</div>;
}

export default PrivateCompo;
