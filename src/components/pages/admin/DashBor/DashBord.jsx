import React from "react";
import SidebarAdmin from "../SideBarAdmin/SidebarAdmin";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../adminPage/AdminPage";
import AdminUser from "../AdminUSer/AdminUser";
import AdminProducts from "../adminProducts/AdminProducts";
import AdminItemUpload from "../adminItemUpload/AdminItemUpload";
function DashBord() {
  return (
    <div className="flex h-[91.8vh]">
      <SidebarAdmin />
      <div className="flex-auto h-full">
        <Routes>
          <Route path="/" element={<AdminPage />} />
          <Route path="/adminuser" element={<AdminUser />} />
          <Route path="/adminproducts" element={<AdminProducts />} />
          <Route path="/item/upload" element={<AdminItemUpload />} />
        </Routes>
      </div>
    </div>
  );
}

export default DashBord;
