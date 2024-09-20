import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../components/pages/Landing/LandingPage";
import Product from "../components/pages/home/Home";
import DashBord from "../components/pages/admin/DashBor/DashBord";
import Cart from "../components/pages/cart/Cart";
import Fevorites from "../components/pages/fevorits/Fevorites";
import PrivateCompo from "../components/private/PrivateCompo";
import ShowProduct from "../components/pages/ShowProduct/ShowProduct";
import AboutPage from '../components/pages/about/AboutPage'
import ContatcPage from '../components/pages/contact/ContatcPage'
function RoutesPath() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/product" element={<Product />} />
      <Route element={<PrivateCompo />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContatcPage />} />
        <Route path="/like" element={<Fevorites />} />
        <Route path="/dashbord/*" element={<DashBord />} />
        <Route path="/product/show/:id" element={<ShowProduct />} />
      </Route>
    </Routes>
  );
}

export default RoutesPath;
