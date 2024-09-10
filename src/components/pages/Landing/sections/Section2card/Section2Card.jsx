import React from "react";

function Section2Card() {
  return (
    <div className="flex w-full md:justify-between md:gap-12 gap-2 md:flex-nowrap flex-wrap justify-around">
      <div className="lg:h-80 lg:w-96 md:h-60 w-[95%]  md:min-w-64 rounded-3xl bg-[#2B2B2B] relative px-3 py-3 text-white flex  items-center  ">
        <h1 className=" z-20">
          <span className="text-2xl font-bold opacity-70">Decoration</span>{" "}
          <br />
          <span className="text-3xl font-bold  opacity-80 tracking-widest">
            With
          </span>{" "}
          <br />
          <span className="text-[#565656] text-4xl font-extrabold tracking-widest flex-wrap">
            Pom Pom
          </span>
          <br />
          <button className="px-10 py-2 mt-5 hover:scale-105 hover:bg-red-600 duration-300 bg-red-500 rounded-xl">
            Browse
          </button>
        </h1>

        <img
          src="src/assets/poster/section2--.png"
          alt=""
          className="h-[70%] absolute bottom-0 right-0 opacity-80 z-10"
        />
      </div>
      <div className="lg:h-80 lg:w-80 md:h-60  md:min-w-64 w-[95%] rounded-3xl bg-[#FDC938] relative px-3 py-3 text-white flex  items-center ">
        <h1 className=" z-20">
          <span className="text-2xl font-bold opacity-70">Decoration</span>{" "}
          <br />
          <span className="text-3xl font-bold  opacity-80 tracking-widest">
            With
          </span>{" "}
          <br />
          <span className="text-[#f8e2a5] text-4xl font-extrabold tracking-widest flex-wrap">
            Rose Flower
          </span>
          <br />
          <button className="px-10 py-2 mt-5 hover:scale-105  duration-300 bg-white rounded-xl  text-yellow-400">
            Browse
          </button>
        </h1>
        <img
          src="src/assets/poster/section2-----.png"
          alt=""
          className="h-[90%] absolute bottom-0 right-0 opacity-80 z-10"
        />
      </div>
      <div className="lg:h-80  md:h-60 md:min-w-64 w-[95%]   lg:flex-auto rounded-3xl bg-[#F4333D] relative px-5 py-5 flex  items-center">
        <h1 className=" z-20">
          <span className="text-2xl font-bold  text-white opacity-65">
            Decoration
          </span>{" "}
          <br />
          <span className="text-3xl font-bold  opacity-80 tracking-widest">
            With
          </span>{" "}
          <br />
          <span className="text-[#F9868C] text-4xl font-extrabold tracking-widest flex-wrap">
            Pom Pom
          </span>
          <br />
          <button className="px-10 py-2 mt-5 hover:scale-105  duration-300 bg-white text-red-600 rounded-xl">
            Browse
          </button>
        </h1>
        <img
          src="src/assets/poster/6.png"
          className="h-full absolute right-0 top-0"
          alt=""
        />
      </div>
    </div>
  );
}

export default Section2Card;
