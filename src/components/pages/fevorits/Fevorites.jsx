import React, { useEffect, useState } from "react";  
import axiosInstance from "../../../utils/axios/AxiosConfig";  
import LikeLoading from "../Landing/LikeLoading";  
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";  
import { useNavigate } from "react-router-dom";  
import { gsap } from "gsap";  

function Favorites() {  
  const navigate = useNavigate();  
  const [response, setResponse] = useState([]);  
  const auth = JSON.parse(localStorage.getItem("AuthUSerData"));  
  const [likeResponse, setLikeResponse] = useState("");  

  const likeRemoveController = (data) => {  
    axiosInstance  
      .post("/shoping/like/remove", { data, auth })  
      .then((res) => {  
        setLikeResponse(res.data);  
        gsap.fromTo(  
          `#item-${data._id}`,   
          { opacity: 1 },   
          { opacity: 0, duration: 0.3, onComplete: () => {  
            setResponse(prev => prev.filter(item => item._id !== data._id));  
          } }  
        );  
      })  
      .catch((err) => console.log(err));  
  };  

  useEffect(() => {  
    axiosInstance  
      .post("/shoping/like/page", auth)  
      .then((res) => setResponse(res.data))  
      .catch((err) => console.log(err));  
  }, [likeResponse]);  

  return (  
    <div className="flex justify-center items-center w-full h-[91.8vh] bg-gray-100 p-4">  
      {response.length > 0 ? (  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">  
          {response.map((item) => (  
            <div  
              key={item._id}  
              id={`item-${item._id}`}  
              className="border border-gray-300 rounded-xl shadow-lg bg-white overflow-hidden transition-transform duration-300 hover:shadow-xl transform hover:scale-105"  
            >  
              <img  
                src={item.uploadedImageURLs[0]}  
                className="h-56 w-full object-cover hover:cursor-pointer"  
                alt={item.ProductName}  
                onClick={() => navigate(`/product/show/${item._id}`)}  
              />  
              <div className="p-2 flex justify-between items-center">  
                <h1 className="font-semibold text-lg">{item.ProductName}</h1>  
                <h1 className="flex items-center text-lg text-green-600">  
                  <CurrencyRupeeIcon fontSize="small" /> {item.ProductPrice}  
                </h1>  
              </div>  
              <span  
                className="flex justify-center text-red-500 text-3xl p-2 transition-transform duration-300 hover:scale-110 cursor-pointer"  
                onClick={() => likeRemoveController(item)}  
              >  
                <i className="ri-dislike-fill"></i>  
              </span>  
            </div>  
          ))}  
        </div>  
      ) : (  
        <LikeLoading />  
      )}  
    </div>  
  );  
}  

export default Favorites;