import React from "react";

function Section3() {
  return (
    <div className="w-full flex  justify-between items-center  px-10 py-10 text-white  bg-[#F42C37] h-96 rounded-3xl mt-20 mb-20 relative ">
      <span>
        <h1>30% OFF</h1>
        <h1 className="text-6xl font-bold leading-tight">
          Brighten <br /> Diwali <br /> with Paper!
        </h1>
      </span>
      <img
        src="src/assets/poster/section3--.png"
        alt=""
        className="absolute inset-0 m-auto bottom-24"
      />
      <h1 className="text-6xl font-bold leading-tight">
        Shop With <br /> Wish Box <br />
        <span className="text-yellow-400">
          <i class="ri-shopping-bag-fill"></i>
        </span>
      </h1>
    </div>
  );
}

export default Section3;
