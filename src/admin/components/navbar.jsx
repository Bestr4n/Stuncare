import React from "react";
import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <div className="relative border border-gray-200 w-2/3 ml-10 ">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Type to Search"
            className="text-black bg-transparent  focus:outline-none w-2/3 ml-10 pl-10"
            style={{
              padding: "10px 8px",
              fontSize: "14px",
              borderRadius: "5px",
              background: "var(--BG, #FFF)",
            }}
          />
        </div>
        <ul className="flex space-x-5 mr-4">
          <li>
            <a href="/notification" className="text-black hover:text-gray-300">
              <FaBell className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a href="/profile" className="text-black hover:text-gray-300">
              <FaUserCircle className="w-5 h-5" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
