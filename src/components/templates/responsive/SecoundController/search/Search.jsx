import React from "react";

function Search() {
  return (
    <div className="flex-auto h-full items-center w-56 z-40 ">
      <input
        type="text"
        className=" h-full flex bg-zinc-200 border-zinc-300  border-[1px] rounded-lg px-2  items-center outline-[1px] outline-zinc-400"
        placeholder="Search heare"
      />
      <div className=" bg-white/70 backdrop-blur-sm absolute w-full left-0 min-h-90 overflow-hidden">
        {/* <ul className="flex flex-col gap-3 ">
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
        </ul> */}
      </div>
    </div>
  );
}

export default Search;
