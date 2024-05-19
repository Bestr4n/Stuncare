import Foto from "../assets/logo_putih.png";
import { NavLink } from "react-router-dom";
import React from "react";

const Login = () => {
  return (
    <div className="bg-[#F1F1FF]">
      <div className="flex justify-center items-center h-screen">
        <div
          className="flex"
          style={{ width: "60%", height: "70%", flexShrink: 0 }}
        >
          <div
            className="w-full max-w-md shadow-lg"
            style={{ width: "50%", height: "100%", flexShrink: 0 }}
          >
            <div className="w-full bg-indigo-700 p-8 justify-center rounded-lg h-full">
              <img
                src={Foto}
                alt="Placeholder"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div
            className="w-full max-w-md shadow-lg"
            style={{ width: "50%", height: "100%", flexShrink: 0 }}
          >
            <div className="w-full bg-white p-8 rounded-r-lg h-full">
              <h2 className="text-2xl font-bold mb-4 mt-10">Login Admin</h2>
              <form>
                <div className="mb-4 mt-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="border rounded-lg px-4 py-2 w-full"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="border rounded-lg px-4 py-2 w-full"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                </div>
                <button
                  className="bg-blue-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-20 ml-56"
                  type="submit"
                >
                  Login
                </button>
                <NavLink
                  to="/admin/dashboardadmin"
                  className="bg-blue-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-20 ml-56"
                >
                  Login
                </NavLink>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
