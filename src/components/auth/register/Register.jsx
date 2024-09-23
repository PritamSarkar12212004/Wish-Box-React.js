import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { json, Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../../utils/axios/AxiosConfig";
import LogingAnimation from "../../loading/auth/LogingAnimation";
function Register() {
  document.title = "Register";
  const [res, setres] = useState("das");
  const [lodaer, setloader] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const formController = async (data) => {
    setloader(true);
    axiosInstance
      .post("/register/user", data)
      .then((res) => responseCoontroller(res))
      .catch((err) => console.log(err));
  };
  const responseCoontroller = async (data) => {
    const authData = await data;
    if (authData.data === "User already exist") {
      alert("Phone number already exist Plz Login");
    } else {
      localStorage.setItem("AuthUSerData", JSON.stringify(authData.data));
      reset();
      setloader(false);
      navigate("/");
      window.location.reload();
    }
  };
  return (
    <div className="w-full h-[91.8vh] flex  ">
      {lodaer ? <LogingAnimation /> : null}
      <div className="md:w-1/2 w-full  h-full flex justify-center items-center">
        <form
          action=""
          className="md:w-[80%] w-[90%] h-[80%] bg-zinc-200 rounded-xl flex flex-col justify-center items-center gap-5"
          onSubmit={handleSubmit(formController)}
        >
          <h1 className="md:text-4xl text-5xl font-bold text-blue-600 mb-10">
            Register
          </h1>
          <span className="md:w-1/2  w-[80%] flex flex-col justify-center items-start">
            <label htmlFor="name" className="md:text-sm opacity-80">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              required
              className="w-full px-2 py-2 rounded-md border-[1px] outline-none border-blue-500"
              {...register("name")}
            />
          </span>
          <span className="md:w-1/2  w-[80%] flex flex-col justify-center items-start">
            <label htmlFor="nummber" className="text-sm opacity-80">
              Number
            </label>
            <input
              type="number"
              id="nummber"
              placeholder="Number"
              required
              className="w-full px-2 py-2 rounded-md border-[1px] outline-none border-blue-500"
              {...register("phoneNumber")}
            />
          </span>
          <span className="md:w-1/2  w-[80%] flex flex-col justify-center items-start">
            <label htmlFor="Password" className="text-sm opacity-80">
              Password
            </label>
            <input
              type="text"
              id="Password"
              required
              placeholder="Password"
              className="w-full px-2 py-2 rounded-md border-[1px] outline-none border-blue-500"
              {...register("password")}
            />
          </span>
          <span className="md:w-1/2   text-sm opacity-75">
            If you alradey registerd then go{" "}
            <Link className="text-blue-600  underline" to={"/auth/login"}>
              Login
            </Link>
          </span>
          <button className="md:px-10 px-12  text-white rounded-xl hover:bg-blue-600 duration-300 hover:scale-105 md:py-2 py-3 bg-blue-500">
            Register
          </button>
        </form>
      </div>
      <div className="md:w-1/2 md:h-full md:flex hidden ">
        <img className="h-full w-full" src="/assets/Auth/login.jpg" alt="" />
      </div>
    </div>
  );
}

export default Register;
