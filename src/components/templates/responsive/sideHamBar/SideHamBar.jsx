import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import ContextMaker from "../../../../context/ContextMaker";
import axiosInstance from "../../../../utils/axios/AxiosConfig";

function SideHamBar() {
  const { sidebarHam, setsidebarHam } = useContext(ContextMaker);
  const [option, setoption] = useState(false);
  const [admin, setadmin] = useState(false);

  const authFinder = localStorage.getItem("AuthUSerData");

  const logOut = () => {
    localStorage.removeItem("AuthUSerData");
    window.location.reload();
  };

  const [set, seter] = useState(false);
  useEffect(() => {
    if (authFinder) {
      axiosInstance
        .post("/auth/admin", JSON.parse(authFinder))
        .then((res) => setadmin(res.data))
        .catch((err) => console.log(err));
    }
  }, [sidebarHam,admin]);
console.log(admin)

  // GSAP Animation
  useEffect(() => {
    if (!sidebarHam) {
      gsap.fromTo(
        ".sidebar",
        { x: "100%" },
        { x: "0%", duration: 0.5, ease: "power3.out" }
      );
      gsap.fromTo(
        ".menu-item",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [sidebarHam, admin]);

  return (
    <div
      className={`${
        sidebarHam ? "right-[-100%]" : "right-0"
      } sidebar h-screen w-full bg-white backdrop-blur-lg shadow-lg fixed z-50 md:hidden flex duration-300`}
    >
      <span
        className="absolute right-4 top-4 text-3xl text-gray-800 cursor-pointer"
        onClick={() => {
          setsidebarHam(!sidebarHam);
          seter(!set);
        }}
      >
        <i className="ri-close-line"></i>
      </span>
      <ul className="w-full h-full flex justify-center items-center flex-col gap-6 text-lg font-bold text-gray-800">
        {/* Menu Items */}
        <li className="menu-item px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-2xl shadow duration-300">
          <NavLink to={"/like"} onClick={() => setsidebarHam(!sidebarHam)}>
            Like
          </NavLink>
        </li>
        <li className="menu-item px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-2xl shadow duration-300">
          <NavLink to={"/cart"} onClick={() => setsidebarHam(!sidebarHam)}>
            Cart
          </NavLink>
        </li>
        <li className="menu-item px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-2xl shadow duration-300">
          <NavLink to={"/about"} onClick={() => setsidebarHam(!sidebarHam)}>
            About
          </NavLink>
        </li>
        <li className="menu-item px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-2xl shadow duration-300">
          <NavLink to={"/contact"} onClick={() => setsidebarHam(!sidebarHam)}>
            Contact
          </NavLink>
        </li>
        {/* Admin Section */}
        {admin && (
          <li className="menu-item px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-2xl shadow duration-300">
            <NavLink to={"/dashbord/adminproducts"} onClick={() => setsidebarHam(!sidebarHam)}>
              Admin
            </NavLink>
          </li>
        )}
        {/* Logout */}
        {authFinder ? (
          <li
            className="menu-item px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-2xl shadow duration-300"
            onClick={() => logOut()}
          >
            Log Out
          </li>
        ) : null}
      </ul>
    </div>
  );
}

export default SideHamBar;
