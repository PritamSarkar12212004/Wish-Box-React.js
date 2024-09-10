import React from "react";

function Section3() {
  return (
    <div className="w-full flex md:flex-row flex-col  md:justify-between md:items-center  justify-center items-center lg:px-10 lg:h-auto  md:px-10 md:py-20   lg:py-10   md:text-white  md:bg-[#F42C37]   rounded-3xl md:mt-20 md:mb-20 mb-96 relative text-black ">
      <img
        src="src/assets/poster/section3.png"
        alt=""
        className=" md:absolute inset-0 m-auto lg:bottom-24 md:bottom-60 lg:h-auto md:w-[50vw] lg:w-auto"
      />
      <div className="w-full flex md:flex-row flex-col  md:justify-between justify-around md:text-start text-center text-3xl">
        <span className="md:m-0 w-full md:flex flex-col hidden ">
          <h1>30% OFF</h1>
          <h1 className="lg:text-6xl lg:font-bold lg:leading-tight md:text-[5vw] md:font-bold md:font-mono">
            Brighten <br /> Diwali <br /> with Paper!
          </h1>
        </span>
        <span className="md:m-0 w-full flex justify-center text-center items-center ">
          <h1>30% OFF</h1> <br />
          <h1 className="lg:text-6xl lg:font-bold lg:leading-tight md:text-[5vw] md:font-bold md:font-mono">
             Brighten Diwali with Paper!
          </h1>
        </span>

        <h1 className="lg:text-6xl lg:font-bold lg:leading-tight md:text-[5vw] md:font-bold md:font-mono">
          Shop With <br /> Wish Box <br />
          <span className="text-yellow-400">
            <i class="ri-shopping-bag-fill"></i>
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Section3;
