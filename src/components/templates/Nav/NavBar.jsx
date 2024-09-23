import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ContextMaker from "../../../context/ContextMaker";
import PopUp from "../../auth/PopUpWindow/PopUp";
import axiosInstance from "../../../utils/axios/AxiosConfig";
import { gsap } from "gsap";

function NavBar() {
  const [admin, setadmin] = useState(false);
  const authFinder = localStorage.getItem("AuthUSerData");
  const [popUp, setpopUp] = useState(false);
  const { sidebarHam, setsidebarHam } = useContext(ContextMaker);
  const [routeName, setRouteName] = useState("");
  const location = useLocation();

  useEffect(() => {
    axiosInstance
      .post("/auth/admin", JSON.parse(authFinder))
      .then((res) => setadmin(res.data))
      .catch((err) => console.log(err));
    setRouteName(location.pathname || ""); // Ensure routeName is always a string
  }, [location, authFinder]);

  // GSAP Animation
  useEffect(() => {
    gsap.fromTo(
      ".nav-item",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.5, ease: "power3.out" }
    );
  }, [admin]);
  console.log(admin);

  return (
    <div className="lg:w-full lg:h-14 md:h-12 sm:h-10 w-full h-14 px-4 py-2 flex items-center justify-between bg-white shadow-md border-b border-gray-200 backdrop-blur-md">
      {popUp ? <PopUp setpopUp={setpopUp} popUp={popUp} /> : null}

      {/* Logo Section */}
      <img
        className="h-full rounded-full shadow-md"
        src="https://i.pinimg.com/564x/9f/93/ae/9f93ae8f39417cd575e735bf5f1b1505.jpg"
        alt="Logo"
      />

      {/* Menu Section */}
      <div className=" md:flex">
        <ul className="flex h-full items-center gap-6 ml-4">
          <li className="nav-item text-lg hover:text-gray-700 duration-300 border-b-2 border-transparent hover:border-b-gray-400">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-item text-lg hover:text-gray-700 duration-300 border-b-2 border-transparent hover:border-b-gray-400">
            <NavLink to="/product">Product</NavLink>
          </li>
          <li className="nav-item text-lg hover:text-gray-700 duration-300 border-b-2 border-transparent hover:border-b-gray-400 hidden md:flex">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="nav-item text-lg hover:text-gray-700 duration-300 border-b-2 border-transparent hover:border-b-gray-400 hidden md:flex">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>

      {/* Search and Filter Section (Visible on product pages) */}
      {(routeName === "/product" || "/product/show" || "/like") && (
        <>
          <select
            name=""
            id=""
            className="hidden md:flex px-3 py-1 rounded-lg bg-gray-100 border-2 border-gray-300 text-gray-700"
          >
            <option value="">All</option>
            <option value="">Category 1</option>
            <option value="">Category 2</option>
            <option value="">Category 3</option>
          </select>
          <input
            type="text"
            placeholder="Search Items"
            className="hidden md:flex text-sm border-2 border-gray-300 rounded-xl px-5 py-2 text-gray-600 bg-gray-50"
          />
        </>
      )}

      {/* Right-Side Icons */}
      <div className="hidden md:flex items-center gap-5">
        {(routeName === "/product" || "/product/show" || "/like") && (
          <>
            <NavLink
              to="/like"
              className="nav-item text-3xl text-red-500 hover:text-gray-600 duration-300"
            >
              <i className="ri-heart-2-fill"></i>
            </NavLink>
            <NavLink
              to="/cart"
              className="nav-item text-3xl text-blue-500 hover:text-gray-600 duration-300"
            >
              <i className="ri-shopping-cart-2-fill"></i>
            </NavLink>
            <button className="px-4 py-2 bg-blue-600 hover:bg-gray-600 rounded-xl text-white text-lg duration-300">
              Catelog
            </button>
          </>
        )}
        {admin && (
          <NavLink
            to="/dashbord/adminproducts"
            className="nav-item text-3xl text-gray-600 hover:text-gray-700 duration-300"
          >
            <i className="ri-user-fill"></i>
          </NavLink>
        )}
      </div>

      {/* Mobile Sidebar Menu Button */}
      <button
        className="md:hidden flex text-4xl text-gray-600"
        onClick={() => setsidebarHam(!sidebarHam)}
      >
        <i className="ri-menu-fill"></i>
      </button>
    </div>
  );
}

export default NavBar;
