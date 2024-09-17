import React, { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axios/AxiosConfig";
import CartLodaer from "../../loading/CartLodaer";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useNavigate } from "react-router-dom";
import PlaceOrder from "./bottomPlaceOrder/PlaceOrder";
function Cart() {
  const [response, setresponse] = useState([]);
  const [cartresponse, setcartresponse] = useState("");
  const navigate = useNavigate();
  const cartRemoveController = (data) => {
    const auth = JSON.parse(localStorage.getItem("AuthUSerData"));
    axiosInstance
      .post("/shoping/cart/remove", { data, auth })
      .then((res) => setcartresponse(res.data))
      .catch((err) => console.log(err));
  };
  const auth = JSON.parse(localStorage.getItem("AuthUSerData"));
  useEffect(() => {
    axiosInstance
      .post("/shoping/cart/page", auth)
      .then((res) => setresponse(res.data))
      .catch((err) => console.log(err));
  }, [cartresponse]);
  return (
    <div className="w-full md:h-[91.8vh] h-[94vh] flex justify-center relative px-2">
      {response.length > 0 ? (
        <div className="md:w-[80%] w-full h-full flex  ">
          <div className="cart md:w-1/2 w-full h-full overflow-y-auto py-3">
            {response.map((item, index) => {
              return (
                <div
                  key={index}
                  className="h-40  w-full border-[1px] border-zinc-200 px-2 py-2 flex gap-3 relative"
                >
                  <span
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={() => cartRemoveController(item)}
                  >
                    <i class="ri-close-large-line"></i>
                  </span>
                  <img
                    src={item.uploadedImageURLs[0]}
                    alt=""
                    className="h-full w-36 rounded"
                  />
                  <div className="flex flex-auto flex-col gap-1 ">
                    <h1 className="text-xl font-bold">{item.ProductName}</h1>
                    <h1 className="text-sm opacity-80">
                      {item.ProductDescription.split(" ").length > 5
                        ? item.ProductDescription.split(" ")
                            .slice(0, 5)
                            .join(" ") + "..."
                        : item.ProductDescription}{" "}
                    </h1>
                    <h1 className="text-sm">
                      <span className="font-bold">Size:</span>{" "}
                      {item.ProductLength}
                      <i class="ri-close-large-line"></i>
                      {item.ProductWidth}
                    </h1>
                    <h1 className="mt-4">
                      <span className="text-xl ">Price:</span>
                      <CurrencyRupeeIcon fontSize="small" />{" "}
                      <span className="text-xl">{item.ProductPrice}</span>
                    </h1>
                  </div>
                </div>
              );
            })}
            <div
              className="w-full mt-3 border-[1px] border-zinc-200 px-2 py-2 flex items-center justify-between cursor-pointer "
              onClick={() => navigate("/product")}
            >
              <span className="text-xl">
                <i class="ri-shopping-bag-line"></i>{" "}
                <span className="text-medium">Add More item</span>
              </span>
              <span className="flex text-2xl">
                <i class="ri-arrow-right-s-line"></i>
              </span>
            </div>
          </div>
          <div className=" md:w-1/2 md:flex hidden h-full py-3 px-3 flex-col items-center gap-3">
            <h1>
              Product Detiles(
              <span className="font-bold">{response.length}</span> item)
            </h1>
            <div className="w-1/2 text-lg text-white flex flex-col gap-1">
              <button className="px-5 py-2 bg-blue-500 hover:bg-blue-600 duration-300  rounded-md">
                Place Order
              </button>
            </div>
          </div>
          <PlaceOrder />

        </div>
      ) : (
        <CartLodaer />
      )}
    </div>
  );
}

export default Cart;
