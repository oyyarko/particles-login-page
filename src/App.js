import React from "react";
import logo from "./logo.svg";
import BackgroundParticles from "./BackgroundParticles";

const App = () => {
  return (
    <>
      <div className="font-poppins bg-blue-400 bg-gradient-to-r from-indigo-500 to-blue-500 min-h-screen flex py-6 items-center justify-center">
        <BackgroundParticles />
        <div className="flex flex-col items-center justify-center w-1/3 max-md:w-4/5">
          <div className="bg-white/30 backdrop-blur-sm max-w-sm sm:mx-8 p-6 rounded-lg sm:p-6 shadow-2xl mx-auto w-full flex flex-col justify-center">
            <img className="h-12 my-3" src={logo} alt="LogoIpsum" />
            <div className="flex flex-col py-4 gap-3">
              <input
                placeholder="Enter Email"
                type="text"
                name="email"
                className="placeholder:text-slate-500 rounded-md p-2 bg-white/50 border border-gray-400 focus:ring-1 focus:outline-none focus:ring-blue-600"
              />
              <input
                placeholder="Enter Password"
                type="password"
                name="password"
                className="placeholder:text-slate-500 rounded-md p-2 bg-white/50 border border-gray-400 focus:ring-1 focus:outline-none focus:ring-blue-600"
              />
              <button className="mt-6 p-3 rounded-md bg-amber-400">
                Submit
              </button>
            </div>
          </div>
          <p className="text-white py-3 text-sm">
            Created by <a href="https://www.github.com/oyyarko" rel="noreferrer" target="_blank" className="underline">@oyyarko</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
