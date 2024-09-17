import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axios/AxiosConfig";
import { Navigate, Outlet } from "react-router-dom";

function AdminPrivate() {
  const [admin, setadmin] = useState(false);
  const authFinder = localStorage.getItem("AuthUSerData");
  useEffect(() => {
    axiosInstance
      .post("/auth/admin", JSON.parse(authFinder))
      .then((res) => setadmin(res.data))
      .catch((err) => console.log(err));
  });
  return <div>{admin ? <Outlet /> : <Navigate to={"/"} />}</div>;
}

export default AdminPrivate;
