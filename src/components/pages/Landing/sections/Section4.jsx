import React from "react";
import Avatars from "../../../layouts/Avatar/Avatars";

function Section4() {
  return (
    <div className="w-full lg:h-full  flex md:flex-row flex-col justify-between gap-5">
      <div className="h-full md:w-[35%] flex flex-col justify-between md:items-start items-center  gap-10 ">
        <div className="md:w-full w-80 h-[47%] hidden bg-blue-500 rounded-3xl md:flex justify-center items-center">
          <img
            src="src/assets/poster/11.png"
            className="h-full hover:scale-125 duration-300 cursor-pointer "
            alt=""
          />
        </div>
        <div className="md:w-full w-96 h-[47%] bg-[#cca3ff] rounded-3xl px-10 py-10 lg:text-4xl md:text-3xl font-bold ">
          <h1 className="opacity-70">GET READY FOR SOMTHING NEW PRODUCT !</h1>
          <button className="h-16 w-16 border-2 rounded-full border-black mt-10  hover:rotate-180 duration-300 ">
            <i class="ri-arrow-right-down-line"></i>
          </button>
        </div>
      </div>
      <div className="h-full md:w-[40%] w-full  flex flex-col justify-between md:items-start items-center gap-20">
        <div className=" px-10 py-10 w-full h-[60%] bg-[#ffe0d3] rounded-3xl">
          <span className=" flex w-full h-16  items-center  md:text-2xl lg:text-4xl font-bold gap-4">
            EXPLORE <Avatars /> <br />
          </span>
          <span className=" flex w-full h-16 md:text-2xl lg:text-4xl font-bold">
            Elevate Every Occasion with Stylish Paper Decoration!
          </span>
          <p className="md:mt-20 lg:text-sm md:text-medium">
            Our paper products are thoughtfully crafted to bring a unique and
            stylish touch to every celebration. Whether it's a birthday,
            wedding, or corporate event, our designs add elegance and charm to <br />
            
            <button className="px-4 mt-3 py-2 bg-orange-500 rounded-3xl text-white">
              Shop Now
            </button>
          </p>
        </div>
        <div className="md:w-full w-96 h-[17vh] bg-[#ffcf49] rounded-3xl px-5 py-5 flex items-center justify-around">
          <div className="flex flex-col">
            <span className="lg:text-5xl md:text-3xl text-4xl ">1000+</span>
            <span className="lg:text-4xl md:text-3xl  text-4xl font-bold">Collection</span>
          </div>
          <div className="flex flex-col">
            <span className="lg:text-5xl md:text-3xl  text-4xl ">200+</span>
            <span className="lg:text-4xl md:text-3xl  text-4xl font-bold">Event</span>
          </div>
        </div>
      </div>
      <div className="h-full flex-auto flex flex-col justify-between md:px-0 px-5  gap-16">
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
