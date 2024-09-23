import React, { useEffect, useState } from "react";  
import axiosInstance from "../../../utils/axios/AxiosConfig";  
import CartLoader from "../../loading/CartLodaer";  
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";  
import { useNavigate } from "react-router-dom";  
import PlaceOrder from "./bottomPlaceOrder/PlaceOrder";  
import ResponsEloading from "../Landing/ResponsEloading";  
import { gsap } from "gsap";  

function Cart() {  
  const [responseLoader, setResponseLoader] = useState(false);  
  const [response, setResponse] = useState([]);  
  const [cartResponse, setCartResponse] = useState("");  
  const navigate = useNavigate();  

  const cartRemoveController = (data) => {  
    setResponseLoader(true);  
    const auth = JSON.parse(localStorage.getItem("AuthUSerData"));  
    axiosInstance  
      .post("/shoping/cart/remove", { data, auth })  
      .then((res) => {  
        setResponseLoader(false);  
        setCartResponse(res.data);  
        // Animate item removal  
        gsap.to(`#item-${data._id}`, {  
          opacity: 0,  
          height: 0,  
          duration: 0.3,  
          onComplete: () => {  
            setResponse((prev) => prev.filter(item => item._id !== data._id));  
          },  
        });  
      })  
      .catch((err) => {  
        console.error(err);  
        setResponseLoader(false);  
      });  
  };  

  const auth = JSON.parse(localStorage.getItem("AuthUSerData"));  
  useEffect(() => {  
    axiosInstance  
      .post("/shoping/cart/page", auth)  
      .then((res) => setResponse(res.data))  
      .catch((err) => console.error(err));  
  }, [cartResponse]);  

  return (  
    <div className="flex justify-center items-center w-full md:h-[91.8vh] h-[94vh] bg-gray-100 px-2">  
      {responseLoader && <ResponsEloading />}  
      <div className="md:w-[80%] w-full h-full flex flex-col md:flex-row">  
        {response.length > 0 ? (  
          <>  
            <div className="cart md:w-1/2 w-full h-full overflow-y-auto py-3 space-y-4">  
              {response.map((item) => (  
                <div  
                  id={`item-${item._id}`}  
                  key={item._id}  
                  className="h-40 w-full border border-gray-200 bg-white rounded-lg shadow-md flex gap-3 p-2 transition-transform duration-300 hover:shadow-xl"  
                >  
                  <span  
                    className="cursor-pointer text-red-500 self-start"  
                    onClick={() => cartRemoveController(item)}  
                  >  
                    <i className="ri-close-line"></i>  
                  </span>  
                  <img  
                    src={item.uploadedImageURLs[0]}  
                    alt={item.ProductName}  
                    className="h-full w-36 rounded object-cover"  
                  />  
                  <div className="flex-grow flex flex-col justify-between">  
                    <h1 className="text-xl font-bold">{item.ProductName}</h1>  
                    <h2 className="text-sm text-gray-600 truncate">  
                      {item.ProductDescription}  
                    </h2>  
                    <h3 className="text-sm">  
                      <span className="font-bold">Size:</span> {item.ProductLength} x {item.ProductWidth}  
                    </h3>  
                    <div className="mt-2 flex items-center">  
                      <span className="text-xl">Price:</span>  
                      <CurrencyRupeeIcon fontSize="small" />  
                      <span className="text-xl">{item.ProductPrice}</span>  
                    </div>  
                  </div>  
                </div>  
              ))}  
              <div  
                className="w-full mt-3 border border-gray-200 bg-white rounded-lg shadow-md flex items-center justify-between p-2 cursor-pointer"  
                onClick={() => navigate("/product")}  
              >  
                <span className="text-xl">  
                  <i className="ri-shopping-bag-line"></i>{" "}  
                  <span className="font-medium">Add More Items</span>  
                </span>  
                <span className="flex text-2xl">  
                  <i className="ri-arrow-right-s-line"></i>  
                </span>  
              </div>  
            </div>  
            <div className="md:w-1/2 hidden md:flex flex-col items-center justify-between h-full py-3 px-3 bg-gray-50">  
              <h1 className="font-bold">Product Details (<span className="underline">{response.length}</span> items)</h1>  
              <PlaceOrder />  
            </div>  
          </>  
        ) : (  
          <CartLoader />  
        )}  
      </div>  
    </div>  
  );  
}  

export default Cart;