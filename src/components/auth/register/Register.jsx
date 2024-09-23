import React, { useState } from "react";  
import { useForm } from "react-hook-form";  
import { Link, useNavigate } from "react-router-dom";  
import axiosInstance from "../../../utils/axios/AxiosConfig";  
import LogingAnimation from "../../loading/auth/LogingAnimation";  

function Register() {  
  document.title = "Register";  
  const [loader, setLoader] = useState(false);  
  const navigate = useNavigate();  
  const { register, handleSubmit, reset } = useForm();  

  const formController = async (data) => {  
    setLoader(true);  
    try {  
      const response = await axiosInstance.post("/register/user", data);  
      responseController(response);  
    } catch (err) {  
      console.error(err);  
      setLoader(false);  
    }  
  };  

  const responseController = async (data) => {  
    const authData = await data;  
    if (authData.data === "User already exist") {  
      alert("Phone number already exists. Please login.");  
    } else {  
      localStorage.setItem("AuthUserData", JSON.stringify(authData.data));  
      reset();  
      setLoader(false);  
      navigate("/");  
      window.location.reload();  
    }  
  };  

  return (  
    <div className="w-full h-screen flex bg-gradient-to-r  to-teal-500">  
      {loader && <LogingAnimation />}  
      <div className="md:w-1/2 w-full flex justify-center items-center">  
        <form  
          className="md:w-3/4 w-[90%] h-3/4 bg-white rounded-xl shadow-lg flex flex-col justify-center items-center gap-6 p-8"  
          onSubmit={handleSubmit(formController)}  
        >  
          <h1 className="text-3xl font-bold text-blue-700 mb-5">  
            Create Account  
          </h1>  

          <div className="w-full flex flex-col">  
            <label htmlFor="name" className="text-md font-semibold text-gray-700">  
              Name  
            </label>  
            <input  
              type="text"  
              id="name"  
              placeholder="Your name"  
              required  
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500 transition duration-300"  
              {...register("name")}  
            />  
          </div>  

          <div className="w-full flex flex-col">  
            <label htmlFor="number" className="text-md font-semibold text-gray-700">  
              Phone Number  
            </label>  
            <input  
              type="number"  
              id="number"  
              placeholder="Phone Number"  
              required  
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500 transition duration-300"  
              {...register("phoneNumber")}  
            />  
          </div>  

          <div className="w-full flex flex-col">  
            <label htmlFor="password" className="text-md font-semibold text-gray-700">  
              Password  
            </label>  
            <input  
              type="password"  
              id="password"  
              required  
              placeholder="Password"  
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500 transition duration-300"  
              {...register("password")}  
            />  
          </div>  

          <div className="text-sm text-gray-600">  
            Already have an account?{" "}  
            <Link className="text-blue-600 underline" to="/auth/login">  
              Login  
            </Link>  
          </div>  

          <button className="w-full py-2 bg-blue-600 text-white rounded-xl transition duration-300   
            hover:bg-blue-700 transform hover:scale-105">  
            Register  
          </button>  
        </form>  
      </div>  

      <div className="md:w-1/2 hidden md:flex md:h-full">  
        <img className="h-full w-full object-cover rounded-r-xl" src="/assets/Auth/login.jpg" alt="" />  
      </div>  
    </div>  
  );  
}  

export default Register;