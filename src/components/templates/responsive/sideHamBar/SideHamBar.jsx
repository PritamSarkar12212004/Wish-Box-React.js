import React, { useContext } from "react";
import ContextMaker from "../../../../context/ContextMaker";

function SideHamBar() {
  const { sidebarHam, setsidebarHam } = useContext(ContextMaker);
  return (
    <div
      className={`${
        sidebarHam ? "right-[-100%]" : "right-0"
      }  h-[91.8vh] w-full bg-zinc-400/30 backdrop-blur-md  fixed top-14 z-50 md:hidden flex duration-300`} onClick={()=>setsidebarHam(!sidebarHam)}
    >
      <ul className="w-full h-full flex justify-center items-center flex-col gap-10 text-xl font-bold">
        <li className="border-b-2  border-transparent duration-300 px-6 py-2  hover:bg-zinc-300/30 backdrop-blur-md rounded-2xl outline-none">
          Fevorit
        </li>
        <li className="border-b-2  border-transparent duration-300 px-6 py-2  hover:bg-zinc-300/30 backdrop-blur-md rounded-2xl outline-none">
          Cart
        </li>
        <li className="border-b-2  border-transparent duration-300 px-6 py-2  hover:bg-zinc-300/30 backdrop-blur-md rounded-2xl outline-none">
          Profile
        </li>
        <li className="border-b-2  border-transparent duration-300 px-6 py-2  hover:bg-zinc-300/30 backdrop-blur-md rounded-2xl outline-none">
          Setting
        </li>
      </ul>
    </div>
  );
}

export default SideHamBar;
