import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../components/pages/admin/adminPage/AdminPage";
import AdminUser from "../components/pages/admin/AdminUSer/AdminUser";
import AdminProducts from "../components/pages/admin/adminProducts/AdminProducts";
import AdminItemUpload from "../components/pages/admin/adminItemUpload/AdminItemUpload";
import AdminPrivate from "../components/private/AdminPrivate";
function AdminRoute() {
  return (
    <Routes>
      <Route element={<AdminPrivate />}>
        <Route path="/" element={<AdminPage />} />
        <Route path="/adminuser" element={<AdminUser />} />
        <Route path="/adminproducts" element={<AdminProducts />} />
        <Route path="/item/upload" element={<AdminItemUpload />} />
      </Route>
    </Routes>
  );
}

export default AdminRoute;
