import React from "react";

function SearchBar() {
  return (
    <div className="md:hidden w-full justify-center flex bg-transparent">
      <input
        type="text"
        placeholder="Search Items"
        name=""
        id=""
        className="text-sm border-zinc-500 border-[1px]  px-5 py-2  rounded-xl "
      />
    </div>
  );
}

export default SearchBar;
