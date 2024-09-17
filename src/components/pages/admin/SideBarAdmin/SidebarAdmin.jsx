import React from "react";
import { NavLink } from "react-router-dom";

function SidebarAdmin() {
  return (
    <div className="w-40 h-[91.8vh]  px-3 py-5 text-black border-r-[1px] border-gray-300">
      <ul className="flex flex-col h-full gap-5">
       
     
        <NavLink to={"/dashbord/adminproducts"}>
          <li className="flex items-center gap-2 px-3 py-2 rounded-2xl hover:bg-blue-600  hover:text-white cursor-pointer duration-300 border-b-2 border-white">
            <span className="text-xl">
              <i class="ri-shopping-bag-fill"></i>
            </span>
            <span className="text-md">Products</span>
          </li>
        </NavLink>

       
      </ul>
    </div>
  );
}

export default SidebarAdmin;
