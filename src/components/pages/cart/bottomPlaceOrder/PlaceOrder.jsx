import React from "react";

function PlaceOrder() {
  return (
    <div className="w-full md:hidden flex h-16 fixed  justify-center items-center px-2 py-1 bottom-0  border-[1px] border-zinc-300 ">
      <button className="px-10 text-white py-4 rounded-xl text-lg bg-red-500">
        Place Order
      </button>
    </div>
  );
}

export default PlaceOrder;
