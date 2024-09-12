import React from "react";

function AdminItemUpload() {
  return (
    <div className="w-full h-[91.8vh] overflow-y-auto flex justify-center">
      <form action="" className="w-[60%]  ">
        <span className="w-full flex justify-between h-28 ">
          <label htmlFor="img1">
            <span className="text-7xl font-extralight flex flex-col items-center justify-center cursor-pointer text-blue-600">
              <i class="ri-upload-cloud-line"></i>{" "}
              <h1 className="text-lg">Frist Image</h1>
            </span>
          </label>
          <input type="file" className="hidden" id="img2" />
          <label htmlFor="img2">
            <span className="text-7xl font-extralight flex flex-col items-center justify-center cursor-pointer text-orange-600">
              <i class="ri-upload-cloud-line"></i>{" "}
              <h1 className="text-lg">Secound Image</h1>
            </span>
          </label>
          <input type="file" className="hidden" id="img2" />
          <label htmlFor="img3" className="">
            <span className="text-7xl font-extralight flex flex-col items-center justify-center cursor-pointer text-red-600">
              <i class="ri-upload-cloud-line"></i>{" "}
              <h1 className="text-lg">Third Image</h1>
            </span>
          </label>
          <input type="file" className="hidden" id="img3" />
          <label htmlFor="img3">
            <span className="text-7xl font-extralight flex flex-col items-center justify-center cursor-pointer text-yellow-600">
              <i class="ri-upload-cloud-line"></i>{" "}
              <h1 className="text-lg">Forth Image</h1>
            </span>
          </label>
          <input type="file" className="hidden" id="img3" />
          <label htmlFor="img4">
            <span className="text-7xl font-extralight flex flex-col items-center justify-center cursor-pointer">
              <i class="ri-upload-cloud-line"></i>{" "}
              <h1 className="text-lg">Fifth Image</h1>
            </span>
          </label>
          <input type="file" className="hidden" id="img4" />
        </span>
        <div className="mt-3  w-full flex justify-between items-center">
          <input
            type="text"
            placeholder="item name"
            className="h-10 px-3 border-[1px] border-zinc-500 rounded-xl capitalize"
          />
          <input
            type="text"
            placeholder="Price"
            className="h-10 px-3 border-[1px] border-zinc-500 rounded-xl capitalize"
          />
          <select
            name=""
            id=""
            className="h-10 px-3 border-[1px] border-zinc-500 rounded-xl capitalize w-36"
          >
            <option value="">Kite</option>
            <option value="">Kite</option>
            <option value="">Kite</option>
            <option value="">Kite</option>
            <option value="">Kite</option>
            <option value="">Kite</option>
          </select>
          <input
            type="text"
            placeholder="Length"
            className=" text-sm h-10 px-3 w-16 border-[1px] border-zinc-500 rounded-xl capitalize"
          />

          <input
            type="text"
            placeholder="Width"
            className=" text-sm h-10 px-3 w-16 border-[1px] border-zinc-500 rounded-xl capitalize"
          />
        </div>
        <span className="w-full flex justify-center mt-5 items-center">
          <textarea
            name=""
            id=""
            className="w-[80%] h-80 border-[1px] border-zinc-400 rounded-xl outline-none px-2 py-2 capitalize"
            placeholder="descprition "
          ></textarea>
        </span>
        <span className="w-full flex justify-center items-center">
          <button className="px-3 py-2 bg-blue-500 rounded text-white  mt-5  hover:bg-blue-600 hover:scale-105 duration-300">
            Upload <i class="ri-upload-cloud-2-line"></i>
          </button>
        </span>
      </form>
    </div>
  );
}

export default AdminItemUpload;
