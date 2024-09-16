import React, { useEffect, useState } from "react";
import axiosInstance from "../../../../utils/axios/AxiosConfig";
import { NavLink } from "react-router-dom";

function OptionProduct() {
  const [pro, setpro] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/find/product/single")
      .then((res) => setpro(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="w-full h-[30vh]  px-3 flex overflow-x-auto gap-10 ">
      {pro
        ? pro.map((item, index) => {
            return (
              <NavLink className="h-full " to={`/product/show/${item._id}`}>
                <div
                  key={index}
                  className="h-[90%] flex flex-col justify-center  duration-300 cursor-pointer"
                >
                  <img
                    src={item.uploadedImageURLs[0]}
                    className="h-full rounded"
                    alt=""
                  />
                  <h1 className="text-sm capitalize ">{item.ProductName}</h1>
                </div>
              </NavLink>
            );
          })
        : null}
    </div>
  );
}

export default OptionProduct;
