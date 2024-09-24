import React, { useState } from "react";

function Sort() {
    const [sort, setsort] = useState(false);
    
  return (
    <div className="h-full relative z-40 ">
      <div className="h-full flex items-center text-xl select-none" onClick={()=>setsort(!sort)}>
        Short
        {sort ? (
          <i class="ri-arrow-drop-up-line"></i>
        ) : (
          <i class="ri-arrow-down-s-line"></i>
        )}
      </div>
      <div
        className={` bg-white/60 rounded-xl backdrop-blur-sm px-3 select-none duration-300   overflow-hidden ${
          sort ? "h-20" : "h-0"
        }`}
      >
        <ul className="flex flex-col gap-5  ">
          <li onClick={()=>setsort(!sort)} className="hover:text-red-500 duration-150">
            Low To High <i class="ri-arrow-drop-up-line"></i>
          </li>
          <li onClick={()=>setsort(!sort)} className="hover:text-red-500 duration-150">
            High To Low <i class="ri-arrow-drop-down-line"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sort;
