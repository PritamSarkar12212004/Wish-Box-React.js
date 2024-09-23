import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axiosInstance from "../../../utils/axios/AxiosConfig";

function Cards(props) {
  const [loader, setloader] = useState(false);
  const navigate = useNavigate();
  const [like, setlike] = useState("");
  const { response, popAuth } = props;
  const auth = JSON.parse(localStorage.getItem("AuthUSerData"));
  const localdata = localStorage.getItem("AuthUSerData");
  const HeartController = (data) => {
    if (localdata) {
      setloader(true);
      axiosInstance
        .post("/shoping/like", { data, auth })
        .then((res) => {
          setlike(res.data);
          setloader(false);
        })
        .catch((err) => console.log(err));
    } else {
      navigate("/auth/login");
    }
  };
  const HeartRemoveController = (data) => {
    setloader(true);

    axiosInstance
      .post("/shoping/like/remove", { data, auth })
      .then((res) => {
        setlike(res.data);
        setloader(false);
      })
      .catch((err) => console.log(err));
  };

  const {
    ProductName,
    ProductPrice,
    ProductDescription,
    uploadedImageURLs,
    _id,
  } = response;

  const ShowProductController = () => {
    navigate(`/product/show/${_id}`);
  };
  useEffect(() => {
    axiosInstance
      .post("/shoping/like/chekar", { data: response, auth })
      .then((res) => setlike(res.data))
      .catch((err) => console.log(err));
  }, [like]);

  return (
    <div className="relative">
      <div className="relative">
        {like ? (
          <span
            className={`text-3xl absolute z-30 duration-300 hover:scale-110  ${
              like ? "text-red-600" : "text-black"
            } cursor-pointer bg-white h-10 w-10  rounded-full flex justify-center items-center`}
            onClick={() => HeartRemoveController(response)}
          >
            <i class="ri-service-line"></i>
          </span>
        ) : (
          <span
            className={`text-3xl absolute  z-30 duration-300 hover:scale-110  ${
              like ? "text-red-600" : "text-black"
            } cursor-pointer bg-white h-10 w-10  rounded-full flex justify-center items-center`}
            onClick={() => HeartController(response)}
          >
            <i class="ri-service-line"></i>
          </span>
        )}
        <motion.div
          className="lg:w-60 md:w-56 w-44 relative hover:scale-105 hover:shadow-lg duration-300 cursor-pointer rounded-lg"
          onClick={() => ShowProductController()}
          whileHover={{ scale: 1.05 }}
        >
          {/* Product Image */}
          <motion.img
            className="w-full md:rounded-xl lg:h-64 md:h-52 h-52 object-cover"
            src={uploadedImageURLs[0]}
            alt="Product Image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Product Details */}
          <div className="w-full md:h-44 bg-white shadow-md md:rounded-2xl px-2 py-2 ">
            {/* Product Name with Ellipsis */}
            <h1 className="md:font-bold font-normal md:text-medium text-sm text-gray-700 whitespace-nowrap overflow-hidden text-ellipsis">
              {ProductName}
            </h1>

            {/* Product Description (Truncated) */}
            <p className="text-sm md:flex hidden text-gray-500">
              {ProductDescription.split(" ").length > 10
                ? ProductDescription.split(" ").slice(0, 10).join(" ") + "..."
                : ProductDescription}
            </p>

            {/* Price and Date */}
            <div className="w-full flex justify-between mt-2 items-center">
              <h1 className="flex flex-col text-blue-600">
                <span className="text-sm">Price</span>₹{ProductPrice}
              </h1>
              <h1 className="text-xs text-gray-500">Date: 1/21/2024</h1>
            </div>
          </div>

          {/* Favorite Icon */}
        </motion.div>
      </div>
    </div>
  );
}

export default Cards;
