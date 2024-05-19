import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../assets/Blog/blog.png";
import Foto1 from "../assets/Blog/blog-1.png";
import Foto2 from "../assets/Blog/blog-2.png";
import Foto3 from "../assets/Blog/blog-3.png";
import Cari from "../components/cari";

const Article = () => {
  return (
    <>
      <img src={Header} alt="Article Header" className="w-full " />
      <div className="container mx-auto flex mb-10">
        <div className="flex justify-center">
          <div className="w-2/4 pr-2">
            <div>
              <NavLink
                to="/detail1"
                className="flex flex-col items-center justify-center bg-white rounded-lg p-2"
              >
                <img src={Foto1} alt="Foto1" className="w-full mt-10" />
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
            <div>
              <NavLink
                to="/detail2"
                className="flex flex-col items-center justify-center bg-white rounded-lg p-2"
              >
                <img src={Foto2} alt="Foto2" className="w-full mt-4" />
                <h1 className="font-bold mt-2">
                  Dari Banyak Masalah Gizi, Kasus Stunting Paling Tinggi di
                  Indonesia
                </h1>
                <p className="text-justify">
                  Stunting masih menjadi permasalahan kesehatan yang dihadapi
                  anak-anak Indonesia. Pasalnya, prevalensi atau angka kejadian
                  stunting di Indonesia menurut hasil Studi Status Gizi
                  Indonesia (SSGI) tahun 2021 masih berada di kisaran 24,4
                  persen.
                </p>
                <p className="text-blue-500">Selengkapnya</p>
              </NavLink>
              <hr />
            </div>
            <div>
              <NavLink
                to="/detail3"
                className="flex flex-col items-center justify-center bg-white rounded-lg p-2"
              >
                <img src={Foto3} alt="Foto3" className="w-full mt-4" />
                <h1 className="font-bold mt-2">
                  Kementerian Kesehatan Rilis Hasil Survei Status Gizi Indonesia
                  (SSGI) tahun 2024
                </h1>
                <p className="text-justify">
                  Gizi memainkan peranan penting dalam tumbuh kembang. Saat
                  mengalami kekurangan gizi secara kronis, stunting pun menjadi
                  hal yang berpotensi terjadi dan mengganggu keberlangsungan
                  hidup hingga masa depan anak.
                </p>
                <p className="text-blue-500 mb-6">Selengkapnya</p>
              </NavLink>
              <hr />
            </div>
          </div>

          <div className="w-370 h-2258 pl-2">
            <Cari />
            <div className="w-370 h-453.36 flex-shrink-0 bg-gray-100 rounded-lg p-4">
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
            <div className="w-370 h-453.36 flex-shrink-0 bg-gray-100 rounded-lg p-4 mt-8">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
