import React from "react";

function Cards(props) {
  const {img}=props
  return (
    <div className="w-60 relative hover:scale-105 duration-300 cursor-pointer">
      <span className="flex  absolute text-white text-2xl  right-2 top-2 hover:text-red-600 hover:scale-110 duration-300 cursor-pointer">
        <i class="ri-heart-line"></i>{" "}
      </span>
      <img
        className="w-full rounded-xl h-64"
        src={img}
        alt=""
      />
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
          <h1 className="flex flex-col absolute bottom-0 right-4">Date:-1/21/2024</h1>
        </div>
      </div>
    </div>
  );
}

export default Cards;
