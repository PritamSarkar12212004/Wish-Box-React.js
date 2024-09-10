import React from "react";
import Avatars from "../../../layouts/Avatar/Avatars";

function Section4() {
  return (
    <div className="w-full h-screen flex justify-between gap-5">
      <div className="h-screen w-[35%] flex flex-col justify-between ">
        <div className="w-full h-[47%] bg-blue-500 rounded-3xl flex justify-center items-center">
          <img
            src="src/assets/poster/11.png"
            className="h-full hover:scale-125 duration-300 cursor-pointer "
            alt=""
          />
        </div>
        <div className="w-full h-[47%] bg-[#cca3ff] rounded-3xl px-10 py-10 text-4xl font-bold ">
          <h1 className="opacity-70">GET READY FOR SOMTHING NEW PRODUCT !</h1>
          <button className="h-16 w-16 border-2 rounded-full border-black mt-10  hover:rotate-180 duration-300 ">
            <i class="ri-arrow-right-down-line"></i>
          </button>
        </div>
      </div>
      <div className="h-screen w-[40%]  flex flex-col justify-between">
        <div className=" px-10 py-10 w-full h-[60%] bg-[#ffe0d3] rounded-3xl">
          <span className=" flex w-full h-16  items-center text-4xl font-bold gap-4">
            EXPLORE <Avatars /> <br />
          </span>
          <span className=" flex w-full h-16 r text-4xl font-bold">
            Elevate Every Occasion with Stylish Paper Decoration!
          </span>
          <p className="mt-20 text-sm">
            Our paper products are thoughtfully crafted to bring a unique and
            stylish touch to every celebration. Whether it's a birthday,
            wedding, or corporate event, our designs add elegance and charm to
            
            <button className="px-4 mt-3 py-2 bg-orange-500 rounded-3xl text-white">
              Shop Now
            </button>
          </p>
        </div>
        <div className="w-full h-[35%] bg-[#ffcf49] rounded-3xl px-5 py-5 flex items-center justify-around">
          <div className="flex flex-col">
            <span className="text-5xl ">1000+</span>
            <span className="text-4xl font-bold">Collection</span>
          </div>
          <div className="flex flex-col">
            <span className="text-5xl ">200+</span>
            <span className="text-4xl font-bold">Event</span>
          </div>
        </div>
      </div>
      <div className="h-screen flex-auto flex flex-col justify-between">
        <div className="w-full h-[35%] bg-[#d5f178] rounded-3xl px-10 py-5">
          <span className="text-2xl h-10 flex justify-between items-center">
            <i class="ri-bar-chart-line"></i> <Avatars />
          </span>
          <h1 className="text-4xl mt-3 font-bold">5000+</h1>
          <h1 className="text-2xl mt-2">Trusted Customer</h1>
          <button className="text-3xl h-12 w-12 text-white mt-2  rounded-full bg-red-500 hover:rotate-180 duration-300">
            <i class="ri-arrow-right-down-line"></i>
          </button>
        </div>
        <div className="w-full h-[60%] bg-[#d5f178] rounded-3xl">
          <img src="src/assets/poster/222222.png" className="w-full h-full" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Section4;
