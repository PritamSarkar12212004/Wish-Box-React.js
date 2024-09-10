import React, { useContext } from "react";
import ContextMaker from "../../../context/ContextMaker";
import DropDown from "../../layouts/Dropdown/DropDown";
function SideBar() {
  const { sidebar, setsidebar } = useContext(ContextMaker);
  return (
    <div
      className={`${
        sidebar ? "left-0" : "left-[-17%]"
      } w-56 h-[91.8vh] text-white px-3 py-3 backdrop-blur-lg bg-white/40 fixed duration-300 flex flex-col z-50 `}
    >
      <span className="text-8xl absolute right-[-30%] top-1/2 transform -translate-y-1/2 hover:text-red-600 duration-300 text-red-500 ">
        {sidebar ? (
          <i
            class="ri-arrow-drop-left-line duration-300"
            onClick={() => setsidebar(!sidebar)}
          ></i>
        ) : (
          <i
            className="ri-arrow-drop-right-line cursor-pointer duration-300"
            onClick={() => setsidebar(!sidebar)}
          ></i>
        )}
      </span>
      <h1 className="text-2xl font-mono text-red-600 font-bold mb-4">Filter</h1>
      <div className="flex flex-col gap-5">
        <DropDown />
        <DropDown />
        <DropDown />
        <DropDown />
        <DropDown />
        <DropDown />
      </div>
    </div>
  );
}

export default SideBar;
