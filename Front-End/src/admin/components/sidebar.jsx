import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaUtensils,
  FaUserCog,
  FaNewspaper,
  FaChalkboardTeacher,
} from "react-icons/fa";
import Logo from "../assets/logo_putih.png";

const Sidebar = ({ isOpen }) => {
  const handleLogoutClick = (event) => {
    event.preventDefault();
    if (window.confirm("Anda ingin keluar?")) {
      console.log("Logged out");
      window.location.href = "/";
    }
  };

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
              className="pl-0"
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
              className="pl-0"
              activeClassName="text-black"
            >
              <div className="flex items-center space-x-2 p-2 hover:bg-white hover:text-gray-700 hover:rounded-md">
                <FaUserCog className="w-6 h-6" />
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
              className="pl-0"
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
              className="pl-0"
              activeClassName="text-black"
            >
              <div className="flex items-center space-x-2 p-2 hover:bg-white hover:text-gray-700 hover:rounded-md">
                <FaNewspaper className="w-6 h-6" />
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
              className="pl-0"
              activeClassName="text-black"
            >
              <div className="flex items-center space-x-2 p-2 hover:bg-white hover:text-gray-700 hover:rounded-md">
                <FaUtensils className="w-6 h-6" />
                <span
                  className={`ml-2 ${isOpen ? "block" : "hidden"} md:block`}
                >
                  Recipe
                </span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="admin/webinaradmin"
              className="pl-0"
              activeClassName="text-black"
            >
              <div className="flex items-center space-x-2 p-2 hover:bg-white hover:text-gray-700 hover:rounded-md">
                <FaFileAlt className="w-6 h-6" />
                <span
                  className={`ml-2 ${isOpen ? "block" : "hidden"} md:block`}
                >
                  Webinar
                </span>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="p-2 mt-auto">
        <ul className="space-y-1">
          <li
            className="flex items-center space-x-2 p-2  hover:bg-white hover:text-gray-700 rounded-md cursor-pointer"
            onClick={handleLogoutClick}
          >
            <FaChalkboardTeacher className="w-6 h-6" />
            <span>Log Out</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
