import React from "react";
import Logo1 from "../assets/Home/logo1.png";
import Logo2 from "../assets/Home/logo2.png";
import Logo3 from "../assets/Home/logo3.png";
import Logo4 from "../assets/Home/logo4.png";
import Logo5 from "../assets/Home/logo5.png";
import { NavLink } from "react-router-dom";

const Slicing = () => {
  return (
    <>
      <div className="container mx-auto py-6 px-4 overflow-x-auto">
        <div className="flex space-x-4">
          {/* Kartu 1 */}
          <div className="card">
            <NavLink
              to="/produk1"
              className="bg-gray-0 w-64 h-54 p-4 rounded-lg flex items-center justify-center"
            >
              <img src={Logo1} alt="logo1" className="w-30 cursor-pointer" />
            </NavLink>
          </div>

          {/* Kartu 2 */}
          <div className="card">
            <NavLink
              to="/produk2"
              className="bg-gray-0 w-64 h-54 p-4 rounded-lg flex items-center justify-center"
            >
              <img src={Logo2} alt="logo2" className="w-30 cursor-pointer" />
            </NavLink>
          </div>

          {/* Kartu 3 */}
          <div className="card">
            <NavLink
              to="/produk3"
              className="bg-gray-0 w-64 h-54 p-4 rounded-lg flex items-center justify-center"
            >
              <img src={Logo3} alt="logo3" className="w-30 cursor-pointer" />
            </NavLink>
          </div>

          {/* Kartu 4 */}
          <div className="card">
            <NavLink
              to="/produk4"
              className="bg-gray-0 w-64 h-54 p-4 rounded-lg flex items-center justify-center"
            >
              <img src={Logo4} alt="logo4" className="w-30 cursor-pointer" />
            </NavLink>
          </div>

          {/* Kartu 5 */}
          <div className="card">
            <NavLink
              to="/produk5"
              className="bg-gray-0 w-64 h-54 p-4 rounded-lg flex items-center justify-center"
            >
              <img src={Logo5} alt="logo5" className="w-30 cursor-pointer" />
            </NavLink>
          </div>

          {/* Kartu 6 */}
          <div className="card">
            <NavLink
              to="/produk1"
              className="bg-gray-0 w-64 h-54 p-4 rounded-lg flex items-center justify-center"
            >
              <img src={Logo1} alt="logo6" className="w-30 cursor-pointer" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slicing;
