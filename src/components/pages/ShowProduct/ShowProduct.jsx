import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../utils/axios/AxiosConfig";
import LoadingProduct from "../../loading/LoadingProduct";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
function ShowProduct() {
  const params = useParams();
  const [mainImage, setMainimage] = useState("");
  const [response, setresponse] = useState();
  const responseController = (res) => {
    setresponse(res);
    setMainimage(res.uploadedImageURLs[0]);
  };
  useEffect(() => {
    axiosInstance
      .post(`/find/product`, params)
      .then((res) => responseController(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="h-[91.8vh] w-full overflow-y-auto flex gap-1 flex-col  ">
      {response ? (
        <div className="w-full h-full flex md:flex-row flex-col  px-2 py-3">
          <div className="flex">
            <div className="h-[50%] w-16  md:flex md:flex-col hidden gap-3">
              {response.uploadedImageURLs.map((res, index) => {
                return (
                  <img
                    key={index}
                    src={res}
                    className=" rounded-md cursor-pointer hover:scale-105 duration-300"
                    alt=""
                    onMouseEnter={() => setMainimage(res)}
                    onClick={() => setMainimage(res)}
                  />
                );
              })}
            </div>
          </div>
          <div className="md:px-20 flex flex-col items-center gap-5 px-1">
            <img
              src={mainImage}
              className=" md:h-[85%] md:w-[35vw] w-auto  rounded-xl h-[70vh]"
              alt=""
            />
          </div>
          <div className="h-20 w-16 mt-5  md:hidden flex gap-3">
            {response.uploadedImageURLs.map((res, index) => {
              return (
                <img
                  key={index}
                  src={res}
                  className=" h-full w-full rounded-md cursor-pointer hover:scale-105 duration-300"
                  alt=""
                  onMouseEnter={() => setMainimage(res)}
                  onClick={() => setMainimage(res)}
                />
              );
            })}
          </div>
          <div className="flex flex-col md:gap-3 gap-1 md:mt-0 mt-5 w-full md:px-0 px-2">
            <h1 className=" capitalize md:text-4xl text-2xl  opacity-60 font-bold  font-serif">
              {response.ProductName}
            </h1>
            <h1 className="flex items-center gap-5">
              <div className="flex items-center">
                <CurrencyRupeeIcon md:fontSize="large" fontSize="small" />
                <span className="md:text-4xl text-2xl">
                  {response.ProductPrice}
                </span>
              </div>
              <span className="text-2xl opacity-65">
                (Pack Of 6 pcs) <i class="ri-shopping-bag-fill"></i>
              </span>
            </h1>
            <span className="px-3 w-24 py-1  rounded-md bg-green-500 text-2xl text-white flex items-center justify-center gap-2 ">
              4.0 <i class="ri-bard-line"></i>
            </span>
            <span className="md:mt-0 mt-2">
              <h1 className="text-2xl font-bold font-mono">
                {" "}
                Type:{" "}
                <span className=" font-normal opacity-90">
                  {response.ProductCategory}
                </span>
              </h1>
              <span className="text-2xl flex  items-center md:gap-10 gap-5 mt-3">
                <span className="flex items-center gap-3">
                  <i class="ri-expand-vertical-line"></i>
                  {response.ProductLength}
                </span>
                <span className="flex items-center gap-3">
                  <i class="ri-expand-horizontal-line"></i>
                  {response.ProductWidth}
                </span>
              </span>
            </span>
            <div className=" md:w-[80%] w-[95%]">
              <h1 className="text-2xl font-bold opacity-80 mt-10">
                Product detiles
              </h1>
              <span className="md:text-medium text-lg">
                {response.ProductDescription}
              </span>
            </div>
            <span className="flex md:gap-3 gap-2">
              <button className="text-lg md:px-7 px-3 text-red-500 py-2  border-2 border-red-400 rounded">
                {" "}
                <i class="ri-heart-3-line"></i> Add favorite{" "}
              </button>
              <button className="text-lg px-7 font-bold py-2 text-white bg-red-500  rounded">
                {" "}
                <i class="ri-shopping-cart-2-line"></i> Add TO Cart{" "}
              </button>
            </span>
          </div>
          {/* <OptionProduct/> */}
        </div>
      ) : (
        <LoadingProduct />
      )}
    </div>
  );
}

export default ShowProduct;
