import React from "react";

function Footer() {
  return (
    <div className="w-full md:h-[50vh] flex  justify-center bg-[#232323] mt-20 lg:px-5 md:px-5 py-10 text-white items-center">
      <div className="md:w-[80%] w-full h-full flex justify-between md:items-center md:flex-row flex-col md:px-0 px-5">
        <div className="flex flex-col gap-5">
          {" "}
          <h1 className="text-4xl">Logo</h1>
          <span>
            <input
              type="text"
              placeholder="Email"
              className="bg-transparent border-b-2 border-white outline-none md:w-72 max-w-64"
            />{" "}
            <br />
            <button className="px-5 py-2 bg-blue-500 rounded-2xl mt-4 hover:bg-blue-600 duration-300">
              Contact
            </button>
          </span>
          <p>
            Get monthly updates and free <br /> resources.
          </p>
        </div>
        <div className="flex gap-10 md:flex-row  flex-col items-start">
          <div>
            <h1 className="text-2xl">Contact</h1>
            <ul className="flex flex-col gap-2 mt-5 opacity-80">
              <li>Phone: 7796419792</li>
              <li>Email: pritam7796419792@gmail.com</li>
              <li>Address: Pimpri-chinchwad,Pune</li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl">Recent News</h1>
            <ul className="flex flex-col gap-2 mt-5 opacity-80">
              <li>About</li>
              <li>Contact</li>
              <li>Terms Policy</li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl">Media</h1>
            <ul className="flex flex-col gap-2 mt-5 opacity-80">
              <li className="text-2xl cursor-pointer">
                <i class="ri-instagram-fill"></i>{" "}
                <i class="ri-facebook-circle-fill"></i>{" "}
                <i class="ri-youtube-fill"></i>{" "}
                <i class="ri-pinterest-fill"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
