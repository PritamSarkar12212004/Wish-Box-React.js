import React from "react";

function ScoreCard() {
  return (
    <div className="w-full flex justify-around flex-col md:flex-row  gap-6 items-center">
      <div className="lg:h-32 lg:w-72 md:h-28 md:w-text-center sm:w-[70%] sm:h-[20vh]  bg-[#5ECCA0] rounded-2xl px-3 py-3 flex justify-center items-center flex-col  w-[90%] h-[15vh]">
        <h1 className="md:text-2xl sm:text-3xl text-zinc-700">
          Total Customer <i class="ri-user-3-line"></i>
        </h1>
        <h1 className="text-[#0274EF] font-bold text-3xl  ">769</h1>
      </div>
      <div className="lg:h-32 lg:w-72 md:h-28 md:w-52 sm:w-[70%] sm:h-[20vh]  bg-[#CB9BFA] rounded-2xl px-3 py-3 flex justify-center items-center flex-col w-[90%] h-[15vh] ">
        <h1 className="md:text-2xl sm:text-3xl text-zinc-700">
          Total category <i class="ri-handbag-line"></i>
        </h1>
        <h1 className="text-[#0274EF] font-bold text-3xl  ">50</h1>
      </div>

      <div className="lg:h-32 lg:w-72 md:h-28 md:w-52 sm:w-[70%] sm:h-[20vh]  bg-[#F8FD91] rounded-2xl px-3 py-3 flex justify-center items-center flex-col w-[90%] h-[15vh] ">
        <h1 className="md:text-2xl sm:text-3xl text-zinc-800">
          Total Items <i class="ri-luggage-cart-line"></i>
        </h1>
        <h1 className="text-[#0274EF] font-bold text-3xl  ">1400</h1>
      </div>
    </div>
  );
}

export default ScoreCard;
