import React from "react";

function Cards(props) {
  const { img } = props;
  return (
    <div className="lg:w-60 md:w-56 max-w-32 relative hover:scale-105 duration-300 cursor-pointer">
      <span className="flex  absolute text-white text-2xl  right-2 top-2 hover:text-red-600 hover:scale-110 duration-300 cursor-pointer">
        <i class="ri-heart-line"></i>{" "}
      </span>
      <img
        className="w-full rounded-xl lg:h-64 md:h-52 h-32"
        src={img}
        alt=""
      />
      <div className="w-full md:h-44   md:relative -top-10 md:bg-white mt-2 md:border-[1px] md:border-zinc-300 md:shadow-md md:rounded-2xl px-2 md:py-2 ">
        <h1 className=" md:font-bold  font-normal md:text-medium text-sm">The Night Star</h1>
        <p className="text-sm md:flex hidden">
          Lorem ipsum dolor sit amet consectetur, adipisxpedita nulla eum!
        </p>
        <div className="w-full md:absolute bottom-2 flex  md:gap-10 md:flex-none flex-wrap">
          <h1 className="md:flex md:flex-col hidden ">
            <span className="text-sm">Price</span>
            2500
          </h1>
          <h1 className="flex flex-col md:absolute bottom-0 right-4">
            Date:-1/21/2024
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Cards;
