import React from "react";

function ItemCards() {
  const img =
    "https://i.pinimg.com/564x/c1/5c/90/c15c9072e2b42db18dc7965b6e3e6646.jpg";
  return (
    <div className="w-60 relative hover:scale-105 duration-300 cursor-pointer">
      <img className="w-full rounded-xl h-64" src={img} alt="" />
      <div className="w-full h-44  relative -top-10 bg-white border-[1px] border-zinc-300 shadow-md rounded-2xl px-2 py-2 ">
        <h1 className=" font-bold">The Night Star</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisxpedita nulla eum!
        </p>
        <div className="w-full absolute bottom-2 flex  gap-10">
          <h1 className="flex flex-col">
            <span className="text-sm">Price</span>
            2500
          </h1>
          <h1 className="flex flex-col absolute bottom-0 right-4">
            Date:-1/21/2024
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ItemCards;
