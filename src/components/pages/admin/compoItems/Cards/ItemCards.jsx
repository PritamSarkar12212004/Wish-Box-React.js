import React from "react";

function ItemCards({ response }) {
  const { ProductName, ProductPrice, ProductDescription, uploadedImageURLs } =
    response;

  return (
    <div className="lg:w-60 md:w-56 w-full sm:w-40 bg-white relative hover:scale-105 transition-transform duration-300 cursor-pointer border border-zinc-300 rounded-lg shadow-lg p-3">
      {/* Favorite Icon */}

      {/* Product Image */}
      <img
        className="w-full lg:h-64 md:h-52 h-40 object-cover rounded-xl"
        src={uploadedImageURLs[0]}
        alt={ProductName}
      />

      {/* Product Info */}
      <div className="w-full mt-2">
        <h1 className="font-bold text-sm lg:text-lg truncate">{ProductName}</h1>

        <p className="text-xs md:text-sm text-gray-600 mt-1 line-clamp-2 md:line-clamp-none">
          {ProductDescription.split(" ").length > 10
            ? ProductDescription.split(" ").slice(0, 10).join(" ") + "..."
            : ProductDescription}
        </p>

        <div className="w-full flex justify-between items-center mt-3">
          {/* Product Price */}
          <div className="flex flex-col">
            <span className="text-xs">Price</span>
            <span className="text-sm font-medium">${ProductPrice}</span>
          </div>

          {/* Product Date */}
          <h1 className="text-xs md:text-sm">Date: 1/21/2024</h1>
        </div>
      </div>
    </div>
  );
}

export default ItemCards;
