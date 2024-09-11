import React from "react";
import SidebarAdmin from "../SideBarAdmin/SidebarAdmin";
import AdminRoute from "../../../../routes/AdminRoute";
function DashBord() {
  return (
    <div className="flex h-[91.8vh]">
      <div className="md:flex  hidden">
        <SidebarAdmin />
      </div>
      <div className="flex-auto h-full">
        <AdminRoute />
      </div>
    </div>
  );
}

export default DashBord;
