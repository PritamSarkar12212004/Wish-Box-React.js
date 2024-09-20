import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../utils/axios/AxiosConfig";
import LoadingProduct from "../../loading/LoadingProduct";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ResponsEloading from "../Landing/ResponsEloading";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

function ShowProduct() {
  const params = useParams();
  const [mainImage, setMainimage] = useState("");
  const [response, setresponse] = useState();
  const [responseLoader, setresponseLoader] = useState(false);
  const [likeresponse, setlikeresponse] = useState("");
  const [cartresponse, setcartresponse] = useState("");
  const [likeLoading, setLikeLoading] = useState(false);
  const [cartLoading, setCartLoading] = useState(false);
  const [like, setlike] = useState();
  const [cart, setcart] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .post(`/find/product`, params)
      .then((res) => responseController(res.data))
      .catch((err) => console.log(err));
  }, [like, likeresponse, cart, cartresponse]);

  const responseController = (res) => {
    setresponse(res);
    setMainimage(res.uploadedImageURLs[0]);
    likeCheker(res);
    cartCheker(res);
  };

  const likeController = (data) => {
    document.title = "Product";
    setresponseLoader(true);
    const auth = JSON.parse(localStorage.getItem("AuthUSerData"));
    setLikeLoading(true);
    axiosInstance
      .post("/shoping/like", { data, auth })
      .then((res) => {
        setlikeresponse(res.data);
        setLikeLoading(false);
        setresponseLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setLikeLoading(false);
      });
  };

  const cartController = (data) => {
    setresponseLoader(true);
    const auth = JSON.parse(localStorage.getItem("AuthUSerData"));
    setCartLoading(true);
    axiosInstance
      .post("/shoping/cart", { data, auth })
      .then((res) => {
        setcartresponse(res.data);
        setCartLoading(false);
        setresponseLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setCartLoading(false);
      });
  };

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

  return (
    <div className="md:h-[91.8vh] w-full overflow-y-auto flex gap-1 flex-col">
      {responseLoader ? <ResponsEloading /> : null}
      {response ? (
        <div className="w-full h-full flex md:flex-row flex-col px-2 pt-3">
          {/* Image Gallery */}
          <div className="flex">
            <div className="h-[50%] w-16 md:flex md:flex-col hidden gap-3">
              {response.uploadedImageURLs.map((res, index) => (
                <motion.img
                  key={index}
                  src={res}
                  className="rounded-md cursor-pointer hover:scale-105 duration-300"
                  alt=""
                  onMouseEnter={() => setMainimage(res)}
                  onClick={() => setMainimage(res)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                />
              ))}
            </div>
          </div>

          {/* Main Product Image */}
          <div className="md:px-20 flex flex-col items-center gap-5 px-1 w-full">
            <motion.img
              src={mainImage}
              className="md:h-[70vh] w-auto rounded-xl max-h-[50vh]"
              alt="Product Image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Mobile Image List */}
          <div className="flex w-full md:hidden">
            <div className="h-[40%] w-16 md:hidden flex gap-3">
              {response.uploadedImageURLs.map((res, index) => (
                <motion.img
                  key={index}
                  src={res}
                  className="rounded-md cursor-pointer mt-5"
                  alt=""
                  onMouseEnter={() => setMainimage(res)}
                  onClick={() => setMainimage(res)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
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
                <motion.button
                  className="text-lg md:px-7 px-2 md:w-56 w-[45vw] text-red-500 py-2 border-2 border-red-400 rounded-md"
                  onClick={() => likeRemoveController(response)}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="ri-heart-2-fill"></i> Remove favorite
                </motion.button>
              ) : (
                <motion.button
                  className="text-lg md:px-7 px-2 md:w-56 w-[45vw] text-blue-600 py-2 border-2 border-blue-600 rounded-md"
                  onClick={() => likeController(response)}
                  disabled={likeLoading}
                  whileTap={{ scale: 0.95 }}
                >
                  {likeLoading ? (
                    "Adding..."
                  ) : (
                    <>
                      <i className="ri-heart-3-line"></i> Add favorite
                    </>
                  )}
                </motion.button>
              )}

              {cart ? (
                <motion.button
                  className="text-lg md:px-7 md:w-56 w-[45vw] flex items-center justify-center gap-4 text-orange-500 py-2 border-2 border-orange-400 rounded-md"
                  onClick={() => navigate("/cart")}
                  whileTap={{ scale: 0.95 }}
                >
                  Go to Cart{" "}
                  <span className="text-2xl">
                    <i className="ri-arrow-right-s-line"></i>
                  </span>
                </motion.button>
              ) : (
                <motion.button
                  className="text-lg md:px-7 px-2 md:w-56 w-[45vw] text-blue-600 py-2 border-2 border-blue-600 rounded-md"
                  onClick={() => cartController(response)}
                  disabled={cartLoading}
                  whileTap={{ scale: 0.95 }}
                >
                  {cartLoading ? (
                    "Adding to Cart..."
                  ) : (
                    <>
                      <i className="ri-shopping-cart-2-line"></i> Add to Cart
                    </>
                  )}
                </motion.button>
              )}
            </span>
          </div>
        </div>
      ) : (
        <LoadingProduct />
      )}
      <Footer />
    </div>
  );
}

export default ShowProduct
