import { NavLink as RouterNavLink } from "react-router-dom";
import React, { useState } from "react";
import logoUngu from "../assets/logo_ungu.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-20 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logoUngu} alt="Logo Ungu" className="h-10 w-auto" />
        </div>
        <div className="hidden lg:flex lg:flex-grow justify-center">
          <ul className="flex gap-8 text-[18px]">
            <CustomNavLink to="/">Beranda</CustomNavLink>
            <CustomNavLink to="about">Tentang Kami</CustomNavLink>
            <CustomNavLink to="service">Layanan</CustomNavLink>
            <CustomNavLink to="product">Produk</CustomNavLink>
            <CustomNavLink to="prediction">Prediksi</CustomNavLink>
            <CustomNavLink to="article">Artikel</CustomNavLink>
            <CustomNavLink to="contact">Kontak</CustomNavLink>
          </ul>
        </div>
        <div className="lg:hidden">
          <button
            className="block text-gray-800 focus:outline-none"
            onClick={toggleNavbar}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.293 4.293a1 1 0 0 0-1.414 0L12 10.586 6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12 5.293 17.293a1 1 0 1 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 0 0 0-1.414z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zM4 11a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zM3 16a1 1 0 100 2h18a1 1 0 100-2H3z"
                />
              )}
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="lg:hidden w-full mt-4">
            <ul className="flex flex-col gap-4 text-[18px] items-center">
              <CustomNavLink to="/home" onClick={toggleNavbar}>
                Beranda
              </CustomNavLink>
              <CustomNavLink to="/about" onClick={toggleNavbar}>
                Tentang Kami
              </CustomNavLink>
              <CustomNavLink to="/service" onClick={toggleNavbar}>
                Layanan
              </CustomNavLink>
              <CustomNavLink to="/product" onClick={toggleNavbar}>
                Produk
              </CustomNavLink>
              <CustomNavLink to="/prediction" onClick={toggleNavbar}>
                Prediksi
              </CustomNavLink>
              <CustomNavLink to="/article" onClick={toggleNavbar}>
                Artikel
              </CustomNavLink>
              <CustomNavLink to="/contact" onClick={toggleNavbar}>
                Kontak
              </CustomNavLink>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

const CustomNavLink = ({ to, children, onClick }) => {
  return (
    <li className="cursor-pointer">
      <RouterNavLink to={to} onClick={onClick}>
        {children}
      </RouterNavLink>
    </li>
  );
};

export default Navbar;
