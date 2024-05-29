import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaCog, FaFileAlt } from "react-icons/fa";
import Logo from "../assets/logo_putih.png";

const Sidebar = ({ isOpen }) => {
  return (
    <aside
      className={`bg-purple-700 text-white flex-shrink-0 transition-width duration-300 ${
        isOpen ? "w-56" : "w-16"
      } md:w-56`}
      style={{
        height: "auto",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="p-4">
        <img src={Logo} alt="Logo" className="w-14 h-14" />
      </div>
      <div className="flex-1 w-full">
        <ul className="space-y-1 ml-3">
          <li>
            <NavLink
              exact
              to="admin/dashboardadmin"
              className="pl-2"
              activeClassName="text-black"
            >
              <div className="flex items-center space-x-2 p-2 hover:bg-white hover:text-gray-700 hover:rounded-md">
                <FaHome className="w-6 h-6" />
                <span
                  className={`ml-2 ${isOpen ? "block" : "hidden"} md:block`}
                >
                  Dashboard
                </span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="admin/customeradmin"
              className="pl-2"
              activeClassName="text-black"
            >
              <div className="flex items-center space-x-2 p-2 hover:bg-white hover:text-gray-700 hover:rounded-md">
                <FaUser className="w-6 h-6" />
                <span
                  className={`ml-2 ${isOpen ? "block" : "hidden"} md:block`}
                >
                  Customer
                </span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="admin/admin"
              className="pl-2"
              activeClassName="text-black"
            >
              <div className="flex items-center space-x-2 p-2 hover:bg-white hover:text-gray-700 hover:rounded-md">
                <FaUser className="w-6 h-6" />
                <span
                  className={`ml-2 ${isOpen ? "block" : "hidden"} md:block`}
                >
                  Admin
                </span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="admin/reportadmin"
              className="pl-2"
              activeClassName="text-black"
            >
              <div className="flex items-center space-x-2 p-2 hover:bg-white hover:text-gray-700 hover:rounded-md">
                <FaFileAlt className="w-6 h-6" />
                <span
                  className={`ml-2 ${isOpen ? "block" : "hidden"} md:block`}
                >
                  Report
                </span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="admin/articleadmin"
              className="pl-2"
              activeClassName="text-black"
            >
              <div className="flex items-center space-x-2 p-2 hover:bg-white hover:text-gray-700 hover:rounded-md">
                <FaFileAlt className="w-6 h-6" />
                <span
                  className={`ml-2 ${isOpen ? "block" : "hidden"} md:block`}
                >
                  Article
                </span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="admin/recipeadmin"
              className="pl-2"
              activeClassName="text-black"
            >
              <div className="flex items-center space-x-2 p-2 hover:bg-white hover:text-gray-700 hover:rounded-md">
                <FaFileAlt className="w-6 h-6" />
                <span
                  className={`ml-2 ${isOpen ? "block" : "hidden"} md:block`}
                >
                  Recipe
                </span>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="p-2 mt-auto">
        <ul className="space-y-1">
          <NavLink
            to="admin/pengaturan"
            className="pl-2"
            activeClassName="text-black"
          >
            <li className="flex items-center space-x-2 p-2 hover:bg-white hover:text-gray-700 hover:rounded-md">
              <FaCog className="w-6 h-6" />
              <span className={`ml-2 ${isOpen ? "block" : "hidden"} md:block`}>
                Settings
              </span>
            </li>
          </NavLink>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
