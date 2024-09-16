import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axiosInstance from "../../utils/axios/AxiosConfig";

function PrivateCompo() {
  const auth = localStorage.getItem("AuthUSerData");

  return <div>{auth ? <Outlet /> : <Navigate to={"/auth/login"} />}</div>;
}

export default PrivateCompo;
