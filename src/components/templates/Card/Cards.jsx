import React from "react";
import { useNavigate } from "react-router-dom";

function Cards(props) {
  const navigate = useNavigate();
  const { response, popAuth } = props;
  const auth = localStorage.getItem("AuthUSerData");
  const HEartController = () => {
    if (auth) {
      console.log("ok");
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
    <div
      className="lg:w-60 md:w-56  w-44     relative hover:scale-105 duration-300 cursor-pointer  rounded-lg "
      onClick={() => ShowProductController()}
    >
      <img
        className="w-full md:rounded-xl lg:h-64 md:h-52 h-52"
        src={uploadedImageURLs[0]}
        alt=""
      />
      <div className="w-full md:h-44   md:relative -top-10 md:bg-white mt-2 md:border-[1px]  md:shadow-md md:rounded-2xl px-2 md:py-2 ">
        <h1 className=" md:font-bold  font-normal md:text-medium text-sm">
          {ProductName}
        </h1>
        <p className="text-sm md:flex hidden">
          {ProductDescription.split(" ").length > 10
            ? ProductDescription.split(" ").slice(0, 10).join(" ") + "..."
            : ProductDescription}
        </p>

        <div className="w-full md:absolute bottom-2 flex  md:gap-10 md:flex-none flex-wrap">
          <h1 className="md:flex md:flex-col hidden ">
            <span className="text-sm">Price</span>
            {2500}
          </h1>
          <h1 className="flex flex-col md:absolute bottom-0 right-4">
            Date:-1/21/2024
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Cards;
