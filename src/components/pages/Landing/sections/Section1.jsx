import React from "react";

function Section1() {
  return (
    <div className="w-full h-screen bg-[#E6E8EB]  rounded-3xl relative lg:px-10 lg:py-10 md:px-4 md:py-4 flex items-center overflow-hidden  md:relative ">
      <img
        src="src/assets/Responsive/1.jpg"
        className="md:flex lg:hidden md:absolute md:top-0 md:h-full md:w-full opacity-70 md:left-0 sm:hidden hidden blackish-image"
        alt=""
      />
      <img
        src="src/assets/Responsive/mobile.jpg"
        className="sm:flex md:hidden flex sm:absolute sm:top-0 sm:h-full sm:w-full opacity-70 sm:left-0 h-full w-screen absolute blackish-image"
        alt=""
      />
      <div className=" flex flex-col gap-6 font-bold z-10 md:justify-center items-center lg:items-start w-full relative">
        <h1 className="lg:text-4xl md:text-5xl sm:text-5xl text-4xl">
          Combo Latkan
        </h1>
        <h1 className="lg:text-6xl md:text-7xl font-bold sm:text-5xl md::text-4xl sm:text-center lg:text-start text-5xl text-center">
          Honeycomb Boll Home <br /> Decoration{" "}
        </h1>
        <h1 className="lg:text-8xl md:text-8xl tracking-widest font-bold md:text-[#c4c3c3] z-10 sm:text-8xl text-center text-5xl text-zinc-500">
          Paper Products
        </h1>
        <button className="lg:px-3 lg:py-2 absolute bottom-[-60%]  md:px-5 md:py-4 md:rounded-xl bg-red-500 px-5 py-3  text-white rounded-md lg:w-40 md:w-56 mt-5 z-10 sm:w-64 sm:py-5 sm:text-2xl">
          Shop By Category
        </button>
      </div>
      <img
        src="src/assets/poster/header.png"
        alt=""
        className="absolute right-24 md:h-[70%] lg:h-[100%] z-0 lg:flex md:hidden sm:hidden hidden"
      />
      <img
        src="src/assets/poster/section1--.png"
        alt=""
        className="absolute bottom-[-40%] opacity-30 z-0 left-20 md:hidden lg:flex sm:hidden hidden "
      />  
    </div>
  );
}

export default Section1;
