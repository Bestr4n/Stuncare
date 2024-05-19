import logoUngu from "../assets/logo_ungu.png";
import { NavLink } from "react-router-dom";
import {
  FaPinterest,
  FaInstagram,
  FaTelegram,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  const inputStyle = {
    width: "30px",
    fontSize: "12px",
  };
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-screen-xl p-4 py-10 lg:py-8 bg-black">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 md:flex md:flex-col items-center col-span-4">
            <a href="/" className="flex items-center">
              <img src={logoUngu} className="h-16" alt="" />
            </a>
            <br />
            <p className="text-white">Temukan solusi hidup</p>
            <p className="text-white">sehat anda bersama kami.</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="flex items-center bg-purple-500 rounded-full p-2 border border-purple-500"
              >
                <FaPinterest className="h-4 w-4 text-white" />
              </a>
              <a
                href="#"
                className="flex items-center bg-purple-500 rounded-full p-2 border border-purple-500"
              >
                <FaInstagram className="h-4 w-4 text-white" />
              </a>
              <a
                href="#"
                className="flex items-center bg-purple-500 rounded-full p-2 border border-purple-500"
              >
                <FaTelegram className="h-4 w-4 text-white" />
              </a>
              <a
                href="#"
                className="flex items-center bg-purple-500 rounded-full p-2 border border-purple-500"
              >
                <FaFacebook className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 col-span-8 bg-black">
            <div className="col-span-2 sm:col-span-1">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Product Kami
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <NavLink
                    to="/home"
                    className="text-purple-600 hover:text-purple-800"
                  >
                    Perusahaan
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/home"
                    className="text-purple-600 hover:text-purple-800"
                  >
                    Website
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Tentang Kami
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <NavLink
                    to="/about"
                    className="text-purple-600 hover:text-purple-800"
                  >
                    Perusahaan
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink
                    to="/about"
                    className="text-purple-600 hover:text-purple-800"
                  >
                    Visi
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="text-purple-600 hover:text-purple-800"
                  >
                    Misi
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Artikel
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <NavLink
                    to="/article"
                    className="text-purple-600 hover:text-purple-800"
                  >
                    Artikel
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/informasi"
                    className="text-purple-600 hover:text-purple-800"
                  >
                    Informasi Gizi
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Kontak
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <p>666 8888 0000</p>
                </li>
                <li>
                  <p className="mb-4">Needhelp@company.com</p>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    className="text-purple-600 hover:text-purple-800"
                  >
                    Admin
                  </NavLink>
                </li>
                <li>
                  <div className="flex items-center mt-6">
                    <input
                      type="text"
                      placeholder="Masukkan Email Anda"
                      className="p-2 border border-gray-300 rounded-l-md flex-grow"
                      style={inputStyle}
                    />
                    <div className="flex items-center bg-purple-500 p-2 border border-purple-500 rounded-r-md">
                      <FaTelegram className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:flex sm:items-center sm:justify-between bg-purple-500 py-3">
        <span className="text-lg text-white sm:flex-1 sm:text-center items-center sm:w-full sm:text-center">
          © 2024 CopyRight 2024 by StartUp Stuncare.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
