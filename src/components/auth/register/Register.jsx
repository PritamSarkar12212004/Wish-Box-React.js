import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { json, Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../../utils/axios/AxiosConfig";
function Register() {
  document.title = "Register";
  const [res, setres] = useState("das");
  const [lodaer, setloader] = useState(true);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const formController = async (data) => {
    axiosInstance
      .post("/register/user", data)
      .then((res) => responseCoontroller(res))
      .catch((err) => console.log(err));
    setloader(!lodaer);
  };
  const responseCoontroller = async (data) => {
    const authData = await data;
    if (authData.data === "User already exist") {
      alert("Phone number already exist Plz Login");
    } else {
      localStorage.setItem("AuthUSerData", JSON.stringify(authData.data));
      reset();
      navigate("/");
    }
  };
  return (
    <div className="w-full h-[91.8vh] flex  ">
      <div className="w-1/2  h-full flex justify-center items-center">
        <form
          action=""
          className="w-[80%] h-[80%] bg-zinc-200 rounded-xl flex flex-col justify-center items-center gap-5"
          onSubmit={handleSubmit(formController)}
        >
          <h1 className="text-4xl font-bold text-blue-600 mb-10">Register</h1>
          <span className="w-1/2 flex flex-col justify-center items-start">
            <label htmlFor="name" className="text-sm opacity-80">
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
          <span className="w-1/2 flex flex-col justify-center items-start">
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
          <span className="w-1/2 flex flex-col justify-center items-start">
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
          <span className="w-1/2 text-sm opacity-75">
            If you alradey registerd then go{" "}
            <Link className="text-blue-600  underline" to={"/auth/login"}>
              Login
            </Link>
          </span>
          <button className="px-10 text-white rounded-xl hover:bg-blue-600 duration-300 hover:scale-105 py-2 bg-blue-500">
            Register
          </button>
        </form>
      </div>
      <div className="w-1/2 h-full">
        <img className="h-full w-full" src="/assets/Auth/login.jpg" alt="" />
      </div>
    </div>
  );
}

export default Register;
