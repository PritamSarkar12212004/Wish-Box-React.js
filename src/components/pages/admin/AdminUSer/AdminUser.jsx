import React from "react";

function AdminUser() {
  return (
    <div className="px-5 py-5 h-[91.8vh] flex-auto">
      <div className="bg-blue-500 text-white px-5 py-5 rounded-xl mb-5 flex  justify-between">
        <h1 className="text-xl">
          <span className="flex gap-3">
            <span className=" text-2xl">Select</span>{" "}
            <div className="border-2 border-white px-2">0</div>
          </span>
        </h1>
        <button className="text-xl px-2 py-1 rounded-xl hover:bg-blue-600 duration-300">
          Select All
        </button>
      </div>
      <ul className="w-full flex justify-center flex-col gap-5 items-center">
        <li className="h-12 w-[60%] relative duration-300 cursor-pointer  border-[1px] border-zinc-300  rounded-xl flex  items-center gap-5">
          <img
            src="https://i.pinimg.com/564x/70/0e/27/700e273957f30baaadff6e8e5ffe0cc4.jpg"
            className="h-full"
            alt=""
          />
          <h1 className="text-xl ">Pritam Sarkar</h1>
          <h1 className=" ">
            <span className="text-xl">
              <i class="ri-home-2-line"></i>
            </span>{" "}
            Pune
          </h1>
          <h1 className=" ">
            <span className="text-xl">
              <i class="ri-men-line"></i>
            </span>
            Male
          </h1>
          <h1 className=" ">
            <i class="ri-calendar-line"></i>:30/6/2024
          </h1>
          <span className="flex justify-center items-center gap-2 absolute right-3">
            <label htmlFor="sel">select</label>
            <input id="sel" type="checkbox" />
          </span>
        </li>
        <li className="h-12 w-[60%] relative duration-300 cursor-pointer  border-[1px] border-zinc-300  rounded-xl flex  items-center gap-5">
          <img
            src="https://i.pinimg.com/564x/70/0e/27/700e273957f30baaadff6e8e5ffe0cc4.jpg"
            className="h-full"
            alt=""
          />
          <h1 className="text-xl ">Pritam Sarkar</h1>
          <h1 className=" ">
            <span className="text-xl">
              <i class="ri-home-2-line"></i>
            </span>{" "}
            Pune
          </h1>
          <h1 className=" ">
            <span className="text-xl">
              <i class="ri-men-line"></i>
            </span>
            Male
          </h1>
          <h1 className=" ">
            <i class="ri-calendar-line"></i>:30/6/2024
          </h1>
          <span className="flex justify-center items-center gap-2 absolute right-3">
            <label htmlFor="sel">select</label>
            <input id="sel" type="checkbox" />
          </span>
        </li>
        <li className="h-12 w-[60%] relative duration-300 cursor-pointer  border-[1px] border-zinc-300  rounded-xl flex  items-center gap-5">
          <img
            src="https://i.pinimg.com/564x/70/0e/27/700e273957f30baaadff6e8e5ffe0cc4.jpg"
            className="h-full"
            alt=""
          />
          <h1 className="text-xl ">Pritam Sarkar</h1>
          <h1 className=" ">
            <span className="text-xl">
              <i class="ri-home-2-line"></i>
            </span>{" "}
            Pune
          </h1>
          <h1 className=" ">
            <span className="text-xl">
              <i class="ri-men-line"></i>
            </span>
            Male
          </h1>
          <h1 className=" ">
            <i class="ri-calendar-line"></i>:30/6/2024
          </h1>
          <span className="flex justify-center items-center gap-2 absolute right-3">
            <label htmlFor="sel">select</label>
            <input id="sel" type="checkbox" />
          </span>
        </li>
        <li className="h-12 w-[60%] relative duration-300 cursor-pointer  border-[1px] border-zinc-300  rounded-xl flex  items-center gap-5">
          <img
            src="https://i.pinimg.com/564x/70/0e/27/700e273957f30baaadff6e8e5ffe0cc4.jpg"
            className="h-full"
            alt=""
          />
          <h1 className="text-xl ">Pritam Sarkar</h1>
          <h1 className=" ">
            <span className="text-xl">
              <i class="ri-home-2-line"></i>
            </span>{" "}
            Pune
          </h1>
          <h1 className=" ">
            <span className="text-xl">
              <i class="ri-men-line"></i>
            </span>
            Male
          </h1>
          <h1 className=" ">
            <i class="ri-calendar-line"></i>:30/6/2024
          </h1>
          <span className="flex justify-center items-center gap-2 absolute right-3">
            <label htmlFor="sel">select</label>
            <input id="sel" type="checkbox" />
          </span>
        </li>
        <li className="h-12 w-[60%] relative duration-300 cursor-pointer  border-[1px] border-zinc-300  rounded-xl flex  items-center gap-5">
          <img
            src="https://i.pinimg.com/564x/70/0e/27/700e273957f30baaadff6e8e5ffe0cc4.jpg"
            className="h-full"
            alt=""
          />
          <h1 className="text-xl ">Pritam Sarkar</h1>
          <h1 className=" ">
            <span className="text-xl">
              <i class="ri-home-2-line"></i>
            </span>{" "}
            Pune
          </h1>
          <h1 className=" ">
            <span className="text-xl">
              <i class="ri-men-line"></i>
            </span>
            Male
          </h1>
          <h1 className=" ">
            <i class="ri-calendar-line"></i>:30/6/2024
          </h1>
          <span className="flex justify-center items-center gap-2 absolute right-3">
            <label htmlFor="sel">select</label>
            <input id="sel" type="checkbox" />
          </span>
        </li>
      </ul>
    </div>
  );
}

export default AdminUser;
