import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../components/pages/Landing/LandingPage";
import Product from "../components/pages/home/Home";
import DashBord from "../components/pages/admin/DashBor/DashBord";

function RoutesPath() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/product" element={<Product />} />
      <Route path="/dashbord/*" element={<DashBord />} />
    </Routes>
  );
}

export default RoutesPath;
