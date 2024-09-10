import React from "react";

function ScoreCard() {
  return (
    <div className="w-full flex justify-around">
      <div className="h-32 w-72 bg-[#5ECCA0] rounded-2xl px-3 py-3 flex justify-center items-center flex-col ">
        <h1 className="text-2xl text-zinc-700">
          Total Customer <i class="ri-user-3-line"></i>
        </h1>
        <h1 className="text-[#0274EF] font-bold text-3xl ">769</h1>
      </div>
      <div className="h-32 w-72 bg-[#CB9BFA] rounded-2xl px-3 py-3 flex justify-center items-center flex-col ">
        <h1 className="text-2xl text-zinc-700">
          Total category <i class="ri-handbag-line"></i>
        </h1>
        <h1 className="text-[#0274EF] font-bold text-3xl ">50</h1>
      </div>

      <div className="h-32 w-72 bg-[#F8FD91] rounded-2xl px-3 py-3 flex justify-center items-center flex-col ">
        <h1 className="text-2xl text-zinc-800">
          Total Items <i class="ri-luggage-cart-line"></i>
        </h1>
        <h1 className="text-[#0274EF] font-bold text-3xl ">1400</h1>
      </div>
    </div>
  );
}

export default ScoreCard;
