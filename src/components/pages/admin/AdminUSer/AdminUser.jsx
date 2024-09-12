import React from "react";

function AdminUser() {
  return (
    <div className="px-5 py-5 h-[91.8vh] flex-auto w-full ">
      <ul className="w-full flex justify-center sm:flex-col  gap-5 items-center flex-wrap h-full overflow-y-auto">
        <li className="md:h-12  lg:w-[60%] md:w-full sm:w-full  sm:h-14  relative duration-300 cursor-pointer  border-[1px] border-zinc-300  rounded-xl flex  items-center md:gap-5 gap-1 sm:flex-wrap sm:justify-between w-[40%] h-64 sm:flex-row flex-col ">
          <img
            src="https://i.pinimg.com/564x/70/0e/27/700e273957f30baaadff6e8e5ffe0cc4.jpg"
            className="sm:h-full sm:w-auto h-[40%] "
            alt=""
          />
          <span className="flex justify-between sm:gap-5 sm:flex-row  flex-col">
            <h1 className="sm:text-xl text-lg">Pritam Sarkar</h1>
            <h1 className=" ">
              <span className="text-xl">
                <i class="ri-home-2-line"></i>
              </span>{" "}
              Pune
            </h1>
            <h1 className=" md:flex hidden">
              <span className="text-xl">
                <i class="ri-men-line"></i>
              </span>
              Male
            </h1>
            <h1 className=" ">
              <i class="ri-calendar-line"></i>:30/6/2024
            </h1>
          </span>
          <span className="flex justify-center items-center gap-2 ">
            <label htmlFor="sel">select</label>
            <input id="sel" type="checkbox" />
          </span>
        </li>
      
       
      </ul>
    </div>
  );
}

export default AdminUser;
