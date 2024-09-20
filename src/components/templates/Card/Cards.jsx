import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Cards(props) {
  const navigate = useNavigate();
  const { response, popAuth } = props;
  const auth = localStorage.getItem("AuthUserData");

  const HeartController = () => {
    if (auth) {
      console.log("Added to favorites");
    } else {
      popAuth();
    }
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

  return (
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
            <span className="text-sm">Price</span>
            ₹{ProductPrice}
          </h1>
          <h1 className="text-xs text-gray-500">Date: 1/21/2024</h1>
        </div>
      </div>

      {/* Favorite Icon */}
      <motion.div
        className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-red-500 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation(); // Prevent navigating on heart click
          HeartController();
        }}
        whileHover={{ scale: 1.2, rotate: 20 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          className="w-6 h-6 text-gray-700 hover:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.293l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.293l-7.682-7.682a4.5 4.5 0 010-6.364z"
          ></path>
        </svg>
      </motion.div>
    </motion.div>
  );
}

export default Cards;
