import React, { useContext } from "react";
import ContextMaker from "../../../context/ContextMaker";
function NotifiCation() {
  const { notibar, setnotibar } = useContext(ContextMaker);
  return (
    <div
      className={`${
        notibar ? "right-0" : "right-[-100%]"
      } w-[80%] h-screen backdrop-blur-md  bg-gray-400/30 absolute top-0 right-0 px-3 py-5 duration-300 z-50 `}
    >
      <span
        className=" absolute cursor-pointer hover:scale-105 duration-300 flex left-[-4%] text-2xl "
        onClick={() => setnotibar(!notibar)}
      >
        <i class="ri-close-large-fill"></i>
      </span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aliquam
      amet itaque at placeat deserunt voluptate in? Fugit excepturi unde iure,
      ab perferendis incidunt reiciendis? Voluptates fuga est distinctio minus.
    </div>
  );
}

export default NotifiCation;
