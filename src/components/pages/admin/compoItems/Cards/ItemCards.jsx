import React from "react";

function ItemCards() {
  const img =
    "https://i.pinimg.com/564x/c1/5c/90/c15c9072e2b42db18dc7965b6e3e6646.jpg";
  return (
    <div className="lg:w-60 md:w-56  w-36   relative hover:scale-105 duration-300 cursor-pointer border-[1px] border-zinc-300 rounded-lg sm:px-3 px-1 py-2">
    <span className="flex  absolute text-white text-2xl  right-2 top-2 hover:text-red-600 hover:scale-110 duration-300 cursor-pointer">
      <i class="ri-heart-line"></i>{" "}
    </span>
    <img
      className="w-full md:rounded-xl lg:h-64 md:h-52 h-40"
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

export default ItemCards;
