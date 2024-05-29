import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../assets/Blog/blog.png";
import Foto1 from "../assets/Blog/blog-1.png";
import Foto2 from "../assets/Blog/blog-2.png";
import Foto3 from "../assets/Blog/blog-3.png";
import Cari from "../components/cari";
import { BiUserCircle } from "react-icons/bi";

const Article = () => {
  return (
    <>
      <img src={Header} alt="Article Header" className="w-full " />
      <div className="container mx-auto flex flex-col mb-10">
        <div className="flex justify-center flex-col md:flex-row">
          <div className="w-full md:w-2/4 pr-2">
            <div data-aos="zoom-out-down" data-aos-duration="1200">
              <NavLink
                to="/detail1"
                className="flex flex-col items-center justify-center bg-white rounded-lg p-2"
              >
                <img src={Foto1} alt="Foto1" className="w-full mt-10" />
                <div className="flex w-full">
                  <div className="flex items-center gap-2">
                    <BiUserCircle className="text-gray-800 mt-1" />
                    <div className="text-gray-500 text-[14px] font-open-sans font-semibold capitalize leading-[22.4px]">
                      By Admin
                    </div>
                  </div>
                </div>
                <h1 className="font-bold mt-2">
                  Kasus Stunting pada anak di Indonesia masih tinggi, Dokter
                  ingatkan pentingnya deteksi dini
                </h1>
                <p className="text-justify">
                  Stunting masih menjadi permasalahan kesehatan yang dihadapi
                  anak-anak Indonesia. Pasalnya, prevalensi atau angka kejadian
                  stunting di Indonesia menurut hasil Studi Status Gizi
                  Indonesia (SSGI) tahun 2021 masih berada di kisaran 24,4
                  persen.
                </p>
                <p className="text-left text-blue-500">Selengkapnya</p>
              </NavLink>
              <hr />
            </div>
            <div data-aos="zoom-out-up" data-aos-duration="1200">
              <NavLink
                to="/detail2"
                className="flex flex-col items-center justify-center bg-white rounded-lg p-2"
              >
                <img src={Foto2} alt="Foto1" className="w-full mt-10" />
                <div className="flex w-full">
                  <div className="flex items-center gap-2">
                    <BiUserCircle className="text-gray-800 mt-1" />
                    <div className="text-gray-500 text-[14px] font-open-sans font-semibold capitalize leading-[22.4px]">
                      By Admin
                    </div>
                  </div>
                </div>
                <h1 className="font-bold mt-2">
                  Dari Banyak Masalah Gizi, Kasus Stunting Paling Tinggi di
                  Indonesia
                </h1>
                <p className="text-justify">
                  Gizi memainkan peranan penting dalam tumbuh kembang. Saat
                  mengalami kekurangan gizi secara kronis, stunting pun menjadi
                  hal yang berpotensi terjadi dan mengganggu keberlangsungan
                  hidup hingga masa depan anak.
                </p>
                <p className="text-left text-blue-500">Selengkapnya</p>
              </NavLink>
              <hr />
            </div>
            <div data-aos="zoom-out-right" data-aos-duration="1200">
              <NavLink
                to="/detail3"
                className="flex flex-col items-center justify-center bg-white rounded-lg p-2"
              >
                <img src={Foto3} alt="Foto1" className="w-full mt-10" />
                <div className="flex w-full">
                  <div className="flex items-center gap-2">
                    <BiUserCircle className="text-gray-800 mt-1" />
                    <div className="text-gray-500 text-[14px] font-open-sans font-semibold capitalize leading-[22.4px]">
                      By Admin
                    </div>
                  </div>
                </div>
                <h1 className="font-bold mt-2">
                  Kementerian Kesehatan Rilis Hasil Survei Status Gizi Indonesia
                  (SSGI) tahun 2024
                </h1>
                <p className="text-justify">
                  Bertepatan di Hari Gizi Nasional ke-63 pada 25 Januari 2023,
                  Kementerian Kesehatan Republik Indonesia mengeluarkan Hasil
                  Survei Status Gizi Indonesia (SSGI) tahun 2022.
                </p>
                <p className="text-left text-blue-500">Selengkapnya</p>
              </NavLink>
              <hr />
            </div>
          </div>

          <div
            className="w-full md:w-72 pl-2"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1200"
          >
            <Cari />
            <div className="flex-shrink-0 bg-gray-100 rounded-lg p-4 mt-4 md:mt-0">
              <h1 className="text-xl font-bold mb-4">Latest Post</h1>
              <ul className="text-sm">
                <li className="flex items-center">
                  <NavLink to="/detail1" className="flex items-center">
                    <img src={Foto1} alt="" className="w-8 h-8 mr-2" />
                    Kasus Stunting <br /> pada anak di Indonesia...
                  </NavLink>
                </li>
                <li className="flex items-center mt-5">
                  <NavLink to="/detail2" className="flex items-center">
                    <img src={Foto2} alt="" className="w-8 h-8 mr-2 " />
                    Dari Banyak Masalah Gizi,
                    <br /> Kasus Stunting..
                  </NavLink>
                </li>
                <li className="flex items-center mt-5">
                  <NavLink to="/detail3" className="flex items-center">
                    <img src={Foto3} alt="" className="w-8 h-8 mr-2" />
                    Kementerian Kesehatan Rilis...
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0 bg-gray-100 rounded-lg p-4 mt-4">
              <h1 className="text-xl font-bold mb-4">Tags</h1>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="flex"
                  style={{
                    height: "30px",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#1F1E17",
                    fontFamily: "Manrope",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "30px",
                    borderRadius: "5px",
                    backgroundColor: "white",
                  }}
                >
                  Kesehatan
                </div>
                <div
                  className="flex"
                  style={{
                    height: "30px",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#1F1E17",
                    fontFamily: "Manrope",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "30px",
                    borderRadius: "5px",
                    backgroundColor: "white",
                  }}
                >
                  Stunting
                </div>
                <div
                  className="flex"
                  style={{
                    height: "30px",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#1F1E17",
                    fontFamily: "Manrope",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "30px",
                    borderRadius: "5px",
                    backgroundColor: "white",
                  }}
                >
                  Indonesia
                </div>
                <div
                  className="flex"
                  style={{
                    height: "30px",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#1F1E17",
                    fontFamily: "Manrope",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "30px",
                    borderRadius: "5px",
                    backgroundColor: "white",
                  }}
                >
                  Mental
                </div>
                <div
                  className="flex"
                  style={{
                    height: "30px",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#1F1E17",
                    fontFamily: "Manrope",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "30px",
                    borderRadius: "5px",
                    backgroundColor: "white",
                  }}
                >
                  Bergizi
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
