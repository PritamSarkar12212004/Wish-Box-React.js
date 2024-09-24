import React from "react";
import Sort from "./sort/Sort";
import Search from "./search/Search";
function SecoundControllerBelowNav() {
  return (
    <div className="w-full h-10  flex md:hidden px-2  justify-between relative ">
      <Sort />
      <Search />
    </div>
  );
}

export default SecoundControllerBelowNav;
