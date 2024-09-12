import React, { useContext, useState } from "react";
import ContextMaker from "../../../../context/ContextMaker";
import { NavLink } from "react-router-dom";

function SideHamBar() {
  const { sidebarHam, setsidebarHam } = useContext(ContextMaker);
  const [option, setoption] = useState(false);
  return (
    <div
      className={`${
        sidebarHam ? "right-[-100%]" : "right-0"
      }  h-screen w-full bg-zinc-400/30 backdrop-blur-md  fixed z-50 md:hidden flex duration-300`}
    >
      <span
        className="absolute right-4 top-4 text-3xl"
        onClick={() => setsidebarHam(!sidebarHam)}
      >
        <i class="ri-close-large-fill"></i>
      </span>
      <ul className="w-full h-full flex justify-center items-center flex-col gap-10 text-xl font-bold">
        <li className="border-b-2  border-transparent duration-300 px-6 py-2  hover:bg-zinc-300/30 backdrop-blur-md rounded-2xl outline-none">
          <NavLink to={"/like"} onClick={() => setsidebarHam(!sidebarHam)}>
            Like
          </NavLink>
        </li>
        <li className="border-b-2  border-transparent duration-300 px-6 py-2  hover:bg-zinc-300/30 backdrop-blur-md rounded-2xl outline-none">
          <NavLink to={"/cart"} onClick={() => setsidebarHam(!sidebarHam)}>
            Cart
          </NavLink>{" "}
        </li>
        <li className="border-b-2  border-transparent duration-300 px-6 py-2  hover:bg-zinc-300/30 backdrop-blur-md rounded-2xl outline-none">
          Profile
        </li>
        <li className="border-b-2  border-transparent duration-300 px-6 py-2  hover:bg-zinc-300/30 backdrop-blur-md rounded-2xl outline-none">
          Setting
        </li>
        <li onClick={() => setoption(!option)}>
          Admin{" "}
          {option ? (
            <i class="ri-arrow-down-s-line"></i>
          ) : (
            <i class="ri-arrow-up-s-line"></i>
          )}{" "}
        </li>
        <span
          className={`w-full h-56 overflow-hidden duration-300 flex flex-col  items-center justify-center`}
        >
          <span
            className={`${
              option ? "h-full" : "h-0"
            } flex flex-col items-center justify-center overflow-hidden duration-300 `}
          >
            <li className="border-b-2  border-transparent duration-300 px-6 py-2   outline-none">
              <NavLink
                to={"/dashbord"}
                onClick={() => setsidebarHam(!sidebarHam)}
              >
                Dash Bord
              </NavLink>
            </li>
            <li className="border-b-2  border-transparent duration-300 px-6 py-2   rounded-2xl outline-none">
              <NavLink
                to={"/dashbord/adminuser"}
                onClick={() => setsidebarHam(!sidebarHam)}
              >
                Users
              </NavLink>
            </li>
            <li className="border-b-2  border-transparent duration-300 px-6 py-2   rounded-2xl outline-none">
              <NavLink
                to={"/dashbord/adminproducts"}
                onClick={() => setsidebarHam(!sidebarHam)}
              >
                Products
              </NavLink>
            </li>
            <li className="border-b-2  border-transparent duration-300 px-6 py-2   rounded-2xl outline-none">
              Produts
            </li>
            <li className="border-b-2  border-transparent duration-300 px-6 py-2   rounded-2xl outline-none">
              Notifications
            </li>
          </span>
        </span>
      </ul>
    </div>
  );
}

export default SideHamBar;
