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
    <div className="h-[91.8vh] w-full overflow-y-auto flex gap-1  ">
      {response ? (
        <div className="w-full h-full flex  px-2 py-3">
          <div className=" flex">
            <div className="h-[50%] w-16  flex flex-col gap-3">
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
          <div className="px-20">
            <img
              src={mainImage}
              className=" h-[85%] w-[35vw] rounded-xl"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className=" capitalize text-4xl opacity-60 font-bold  font-serif">
              {response.ProductName}
            </h1>
            <h1 className="flex items-center gap-5">
              <div className="flex items-center">
                <CurrencyRupeeIcon fontSize="large" />
                <span className="text-4xl">{response.ProductPrice}</span>
              </div>
              <span className="text-2xl opacity-65">
                (Pack Of 6 pcs) <i class="ri-shopping-bag-fill"></i>
              </span>
            </h1>
            <span className="px-3 w-24 py-1  rounded-md bg-green-500 text-2xl text-white flex items-center justify-center gap-2 ">
              4.0 <i class="ri-bard-line"></i>
            </span>
            <span>
              <h1 className="text-2xl font-bold font-mono">
                {" "}
                Type:{" "}
                <span className=" font-normal opacity-90">
                  {response.ProductCategory}
                </span>
              </h1>
              <span className="text-2xl flex  items-center gap-10">
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
            <div className=" w-[80%]">
              <h1 className="text-2xl font-bold opacity-80 mt-10">
                Product detiles
              </h1>
              {response.ProductDescription}
            </div>
          </div>
        </div>
      ) : (
        <LoadingProduct />
      )}
    </div>
  );
}

export default ShowProduct;
