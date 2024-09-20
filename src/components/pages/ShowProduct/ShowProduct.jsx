import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../utils/axios/AxiosConfig";
import LoadingProduct from "../../loading/LoadingProduct";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ResponsEloading from "../Landing/ResponsEloading";

function ShowProduct() {
  const params = useParams();
  const [mainImage, setMainimage] = useState("");
  const [response, setresponse] = useState();
  const responseController = (res) => {
    setresponse(res);
    setMainimage(res.uploadedImageURLs[0]);
    likeCheker(res);
    cartCheker(res);
  };

  const [responseLoader, setresponseLoader] = useState(false);

  const [likeresponse, setlikeresponse] = useState("");
  const [cartresponse, setcartresponse] = useState("");

  const [likeLoading, setLikeLoading] = useState(false); // Loading state for "Add favorite"
  const [cartLoading, setCartLoading] = useState(false); // Loading state for "Add to Cart"

  const likeController = (data) => {
    setresponseLoader(true); // Start loading for "Add favorite"
    const auth = JSON.parse(localStorage.getItem("AuthUSerData"));
    setLikeLoading(true); // Start loading for "Add favorite"
    axiosInstance
      .post("/shoping/like", { data, auth })
      .then((res) => {
        setlikeresponse(res.data);
        setLikeLoading(false); // Stop loading after response
        setresponseLoader(false); // Stop loading after response
      })
      .catch((err) => {
        console.log(err);
        setLikeLoading(false); // Stop loading in case of error
      });
  };

  const cartController = (data) => {
    setresponseLoader(true); // Start loading for "Add to Cart"

    const auth = JSON.parse(localStorage.getItem("AuthUSerData"));
    setCartLoading(true); // Start loading for "Add to Cart"
    axiosInstance
      .post("/shoping/cart", { data, auth })
      .then((res) => {
        setcartresponse(res.data);
        setCartLoading(false); // Stop loading after response
        setresponseLoader(false); // Stop loading after response
      })
      .catch((err) => {
        console.log(err);
        setCartLoading(false); // Stop loading in case of error
      });
  };

  const likeRemoveController = (data) => {
    setresponseLoader(true); // Start loading for "Add favorite"
    const auth = JSON.parse(localStorage.getItem("AuthUSerData"));
    axiosInstance
      .post("/shoping/like/remove", { data, auth })
      .then((res) => {
        setlikeresponse(res.data);
        setresponseLoader(false); // Stop loading after response
      })
      .catch((err) => console.log(err));
  };

  const [like, setlike] = useState();
  const [cart, setcart] = useState();
  const likeCheker = (data) => {
    const auth = JSON.parse(localStorage.getItem("AuthUSerData"));
    axiosInstance
      .post("/shoping/like/chekar", { data, auth })
      .then((res) => setlike(res.data))
      .catch((err) => console.log(err));
  };

  const cartCheker = (data) => {
    const auth = JSON.parse(localStorage.getItem("AuthUSerData"));
    axiosInstance
      .post("/shoping/cart/chekar", { data, auth })
      .then((res) => setcart(res.data))
      .catch((err) => console.log(err));
  };

  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .post(`/find/product`, params)
      .then((res) => responseController(res.data))
      .catch((err) => console.log(err));
  }, [like, likeresponse, cart, cartresponse]);

  return (
    <div className="md:h-[91.8vh]  w-full overflow-y-auto flex gap-1 flex-col">
      {responseLoader ? <ResponsEloading /> : null}
      {response ? (
        <div className="w-full h-full flex md:flex-row flex-col  px-2 py-3">
          {/* Image rendering */}
          <div className="flex">
            <div className="h-[50%] w-16  md:flex md:flex-col hidden gap-3">
              {response.uploadedImageURLs.map((res, index) => {
                return (
                  <img
                    key={index}
                    src={res}
                    className="rounded-md cursor-pointer hover:scale-105 duration-300"
                    alt=""
                    onMouseEnter={() => setMainimage(res)}
                    onClick={() => setMainimage(res)}
                  />
                );
              })}
            </div>
          </div>
          <div className="md:px-20 flex flex-col items-center gap-5 px-1 w-full">
            <img
              src={mainImage}
              className="md:h-[85%] md:w-[50vw] w-auto  rounded-xl max-h-[70vh]"
              alt=""
            />
          </div>

          {/* Product details */}
          <div className="flex flex-col md:gap-3 gap-1 md:mt-0 mt-5 w-full md:px-0 px-2">
            <h1 className="capitalize md:text-4xl text-2xl opacity-60 font-bold font-serif">
              {response.ProductName}
            </h1>
            <h1 className="flex items-center gap-5">
              <div className="flex items-center">
                <CurrencyRupeeIcon md:fontSize="large" fontSize="small" />
                <span className="md:text-4xl text-2xl">
                  {response.ProductPrice}
                </span>
              </div>
              <span className="text-2xl opacity-65">(Pack Of 6 pcs)</span>
            </h1>
            <span className="px-3 w-24 py-1 rounded-md bg-green-500 text-2xl text-white flex items-center justify-center gap-2">
              4.0
            </span>

            {/* Product description */}
            <div className="md:w-[80%] w-[95%]">
              <h1 className="text-2xl font-bold opacity-80 mt-10">
                Product details
              </h1>
              <span className="md:text-medium text-lg">
                {response.ProductDescription}
              </span>
            </div>

            {/* Favorite and Cart buttons */}
            <span className="flex md:gap-3 gap-2 md:justify-normal justify-between md:mt-0 mt-3">
              {like ? (
                <button
                  className="text-lg md:px-7 px-2 md:w-56 w-[45vw] text-red-500 py-2 border-2 border-red-400 rounded-md"
                  onClick={() => likeRemoveController(response)}
                >
                  <i className="ri-heart-2-fill"></i> Remove favorite
                </button>
              ) : (
                <button
                  className="text-lg md:px-7 px-2 md:w-56 w-[45vw] text-blue-600 py-2 border-2 border-blue-600 rounded-md"
                  onClick={() => likeController(response)}
                  disabled={likeLoading} // Disable the button while loading
                >
                  {likeLoading ? (
                    "Adding..."
                  ) : (
                    <>
                      <i className="ri-heart-3-line"></i> Add favorite
                    </>
                  )}
                </button>
              )}
              {cart ? (
                <button
                  className="text-lg md:px-7 md:w-56 w-[45vw] flex items-center justify-center gap-4 text-orange-500 py-2 border-2 border-orange-400 rounded-md"
                  onClick={() => navigate("/cart")}
                >
                  Go to Cart{" "}
                  <span className="text-2xl">
                    <i className="ri-arrow-right-s-line"></i>
                  </span>
                </button>
              ) : (
                <button
                  className="text-lg md:px-7 px-2 md:w-56 w-[45vw] text-blue-600 py-2 border-2 border-blue-600 rounded-md"
                  onClick={() => cartController(response)}
                  disabled={cartLoading} // Disable the button while loading
                >
                  {cartLoading ? (
                    "Adding to Cart..."
                  ) : (
                    <>
                      <i className="ri-shopping-cart-2-line"></i> Add to Cart
                    </>
                  )}
                </button>
              )}
            </span>
          </div>
        </div>
      ) : (
        <LoadingProduct />
      )}
    </div>
  );
}

export default ShowProduct;
