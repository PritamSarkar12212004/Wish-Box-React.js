import React, { useEffect, useRef, useState } from "react";  
import { useForm } from "react-hook-form";  
import { Link, useNavigate } from "react-router-dom";  
import axiosInstance from "../../../utils/axios/AxiosConfig";  
import LogingAnimation from "../../loading/auth/LogingAnimation";  
import gsap from "gsap";  

function Login() {  
  const navigate = useNavigate();  
  const [loader, setLoader] = useState(false);  
  document.title = "Login";  
  const { register, handleSubmit, reset } = useForm();  
  const formRef = useRef(null); // Create a ref for the form for GSAP  

  useEffect(() => {  
    // GSAP animation on mount for the form  
    gsap.from(formRef.current, {  
      opacity: 0,  
      y: 50,  
      duration: 1,  
      ease: "back.out(1.7)",  
    });  
  }, []);  

  const LoginFormController = (data) => {  
    setLoader(true);  
    axiosInstance  
      .post("/register/user/login", data)  
      .then((res) => resController(res))  
      .catch((err) => {  
        console.log(err);  
        setLoader(false); // Set loader to false on error  
      });  
  };  

  const resController = (res) => {  
    if (  
      res.data === "Password is incorrect" ||  
      res.data === "Phone number is incorrect"  
    ) {  
      alert(res.data);  
      setLoader(false);  
    } else {  
      localStorage.setItem("AuthUserData", JSON.stringify(res.data));  
      reset();  
      setLoader(false);  
      navigate("/");  
      window.location.reload();  
    }  
  };  

  return (  
    <div className="w-full h-[91.8vh] flex">  
      {loader ? <LogingAnimation /> : null}  
      <div className="md:w-1/2 md:h-full w-full flex justify-center items-center bg-white">  
        <form  
          ref={formRef} // Attach ref for GSAP  
          className="md:w-[70%] md:h-[80%] md:bg-zinc-200 bg-zinc-300/30 backdrop-blur-sm w-[90%] h-[60%] rounded-xl flex flex-col justify-center items-center gap-5"  
          onSubmit={handleSubmit(LoginFormController)}  
        >  
          <h1 className="md:text-4xl text-5xl font-bold text-blue-600 md:mb-10">  
            Login  
          </h1>  
          <span className="md:w-1/2 w-[80%] flex flex-col justify-center items-start">  
            <label htmlFor="phoneNumber" className="text-sm opacity-80">  
              Number  
            </label>  
            <input  
              type="number"  
              id="phoneNumber"  
              placeholder="Number"  
              className="w-full px-2 py-2 rounded-md border-[1px] outline-none border-blue-500"  
              {...register("phoneNumber")}  
            />  
          </span>  
          <span className="md:w-1/2 w-[80%] flex flex-col justify-center items-start">  
            <label htmlFor="Password" className="text-sm opacity-80">  
              Password  
            </label>  
            <input  
              type="password" // Change type to password for better security  
              id="Password"  
              placeholder="Password"  
              className="w-full px-2 py-2 rounded-md border-[1px] outline-none border-blue-500"  
              {...register("password")}  
            />  
          </span>  
          <span className="md:w-1/2 text-center text-sm opacity-75">  
            If you are not registered, go{" "}  
            <Link className="text-blue-600 underline" to={"/auth/register"}>  
              Register  
            </Link>  
          </span>  
          <button className="md:px-10 px-12 py-3 text-2xl text-white rounded-xl hover:bg-blue-600 duration-300 hover:scale-105 md:py-2 bg-blue-500">  
            Login  
          </button>  
        </form>  
      </div>  
      <div className="lg:w-1/2 lg:h-full md:w-[30%] h-[70%] md:flex hidden">  
        <img className="h-full w-full" src="/assets/Auth/login.jpg" alt="" />  
      </div>  
    </div>  
  );  
}  

export default Login;