import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function PopUp({ popUp, setpopUp }) {
  return (
    <div className=" absolute z-50 py-10 px-16   bg-blue-500 rounded-lg  shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-red-500">
      <span
        className="absolute top-2 lg:text-3xl md:text-2xl text-3xl right-2 cursor-pointer"
        onClick={() => setpopUp(false)}
      >
        <i class="ri-close-line"></i>
      </span>
      <h1 className="text-white w-full h-full flex justify-center items-center bg-blue-600 px-4 py-2 rounded-xl  ">
        <NavLink to={"/auth/login"} onClick={() => setpopUp(!popUp)}>
          Login
        </NavLink>
      </h1>
    </div>
  );
}

export default PopUp;
