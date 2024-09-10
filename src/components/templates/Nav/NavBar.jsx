import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ContextMaker from "../../../context/ContextMaker";

function NavBar() {
  const { notibar, setnotibar } = useContext(ContextMaker);
  const [routeName, setRouteName] = useState();
  const location = useLocation();
  console.log(routeName);
  useEffect(() => {
    setRouteName(location.pathname);
  }, [location]);
  return (
    <div className="lg:w-[full] lg:h-14  lg:text-xl md:h-12 md:text-medium sm:text-sm  h-14 w-[100w] border-b-[1px] border-b-gray-300 px-3 py-1 flex items-center justify-between ">
      <img
        className="h-full"
        src="https://i.pinimg.com/564x/9f/93/ae/9f93ae8f39417cd575e735bf5f1b1505.jpg"
        alt=""
      />
      <div>
        <ul className="flex  h-full items-center gap-10 ml-3">
          <li className="text-xl hover:text-blue-600 duration-300 border-b-2 border-b-white  hover:border-b-blue-600 ">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="text-xl hover:text-blue-600 duration-300 border-b-2 border-b-white  hover:border-b-blue-600 ">
            <NavLink to={"/product"}>Product</NavLink>
          </li>
          <li className="text-xl hover:text-blue-600 duration-300 border-b-2 border-b-white  hover:border-b-blue-600  md:flex hidden">
            <NavLink>About</NavLink>
          </li>
          <li className="text-xl hover:text-blue-600 duration-300 border-b-2 border-b-white  hover:border-b-blue-600 md:flex hidden ">
            <NavLink>Contact</NavLink>
          </li>
        </ul>
      </div>
      {routeName === "/product" ? (
        <select name="" id="" className=" md:flex hidden">
          <option value="">All</option>
          <option value="">cwf</option>
          <option value="">cwf</option>
          <option value="">cwf</option>
          <option value="">cwf</option>
          <option value="">cwf</option>
          <option value="">cwf</option>
          <option value="">cwf</option>
          <option value="">cwf</option>
          <option value="">cwf</option>
          <option value="">cwf</option>
        </select>
      ) : null}
      {routeName === "/product" ? (
        <input
          type="text"
          placeholder="Search Items"
          name=""
          id=""
          className="text-sm border-zinc-500 border-2 rounded- px-5 py-2 rounded-xl md:flex hidden "
        />
      ) : null}

      <div className="  md:flex hidden">
        <ul className="flex  h-full items-center gap-10 ml-3">
          {routeName === "/product" ? (
            <>
              <span className="text-3xl  text-red-600  duration-300 cursor-pointer">
                <i class="ri-heart-2-fill"></i>{" "}
              </span>
              <span className="text-3xl   text-blue-600 duration-300 cursor-pointer">
                <i class="ri-shopping-cart-2-fill"></i>{" "}
              </span>
              <span
                className="text-3xl  text-orange-600 cursor-pointer"
                onClick={() => setnotibar(!notibar)}
              >
                <i class="ri-chat-4-fill"></i>
              </span>

              <button className=" px-4 py-2 bg-blue-500 rounded-xl text-white text-lg hover:bg-blue-600 duration-300">
                <NavLink>Catelog</NavLink>
              </button>
            </>
          ) : null}
          <span className="text-3xl cursor-pointer">
            <NavLink to={"/dashbord"}>
              <i class="ri-user-fill"></i>
            </NavLink>
          </span>
        </ul>
      </div>
      <button className="md:hidden flex text-4xl">
        <i class="ri-menu-fill"></i>
      </button>
    </div>
  );
}

export default NavBar;
