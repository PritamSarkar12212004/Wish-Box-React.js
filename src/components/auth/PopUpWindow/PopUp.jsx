import React, { useState } from "react";

function PopUp({ popUp, setpopUp }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Login attempted with:", email, password);
    } else {
      console.log("Register attempted with:", name, email, password);
    }
  };

  return (
    <div className=" absolute z-50 lg:w-96 md:w-80 sm:w-64 w-[80%]  bg-zinc-500/30 backdrop-blur-md rounded-lg lg:p-8 px-4 py-8 md:p-4 sm:p-3 shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <span
        className="absolute top-2 lg:text-3xl md:text-2xl text-3xl right-2 cursor-pointer"
        onClick={() => setpopUp(false)}
      >
        <i class="ri-close-line"></i>
      </span>
      <h2 className="lg:text-2xl md:text-xl text-3xl text-blue-600 font-bold lg:mb-6 md:m-3 text-center">
        {isLogin ? "Login" : "Register"}
      </h2>
      <form onSubmit={handleSubmit} className="lg:space-y-4 md:space-y-2 space-y-4">
        {!isLogin && (
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        )}
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1 font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 sm:mt-2"
        >
          {isLogin ? "Log In" : "Register"}
        </button>
      </form>
      <p className="mt-4 text-center text-sm">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-500 hover:underline ml-1"
        >
          {isLogin ? "Sign up" : "Log in"}
        </button>
      </p>
    </div>
  );
}

export default PopUp;
