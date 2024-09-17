import React, { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axios/AxiosConfig";
import LikeLoading from "../Landing/LikeLoading";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useNavigate } from "react-router-dom";
function Fevorites() {
  const navigate = useNavigate();
  const [response, setresponse] = useState([]);
  const auth = JSON.parse(localStorage.getItem("AuthUSerData"));
  const [likeresponse, setlikeresponse] = useState("");
  const likeRemoveController = (data) => {
    const auth = JSON.parse(localStorage.getItem("AuthUSerData"));
    axiosInstance
      .post("/shoping/like/remove", { data, auth })
      .then((res) => setlikeresponse(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axiosInstance
      .post("/shoping/like/page", auth)
      .then((res) => setresponse(res.data))
      .catch((err) => console.log(err));
  }, [likeresponse]);
  return (
    <div className="w-full h-[91.8vh] flex justify-center overflow-y-auto">
      {response.length>0 ? (
        <div className="md:w-1/2 w-full flex gap-2 flex-wrap mt-2 h-full ">
          {response.map((item, index) => {
            return (
              <div
                key={index}
                className="border-[1px] border-zinc-300 h-72 px-2 py-1 rounded-xl"
              >
                <img
                  src={item.uploadedImageURLs[0]}
                  className=" h-52 w-44 rounded-md cursor-pointer"
                  alt=""
                  onClick={() => navigate(`/product/show/${item._id}`)}
                />
                <div className="w-full flex  justify-between px-2 py-1 ">
                  <h1>Price:{item.ProductName}</h1>
                  <h1 className="flex items-center">
                    {" "}
                    <CurrencyRupeeIcon fontSize="small" /> {item.ProductPrice}
                  </h1>
                </div>
                <span
                  className="flex w-full  text-red-500 text-3xl justify-center items-center "
                  onClick={() => likeRemoveController(item)}
                >
                  <i class="ri-dislike-fill cursor-pointer hover:scale-105 duration-300"></i>
                </span>
              </div>
            );
          })}
        </div>
      ) : (
        <LikeLoading />
      )}
    </div>
  );
}

export default Fevorites;
