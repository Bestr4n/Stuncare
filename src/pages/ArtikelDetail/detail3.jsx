import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../assets/Blog/frame.png";
import Foto1 from "../../assets/Blog/blog-1.png";
import Foto2 from "../../assets/Blog/blog-2.png";
import Foto3 from "../../assets/Blog/blog-3.png";
import Cari from "../../components/cari";
import Artikelkontak from "../../components/artikelkontak";
const Detail3 = () => {
  return (
    <>
      <img src={Header} alt="Header Image" className="mx-auto" />
      <div className="container mx-auto flex mb-10">
        <div className="flex justify-center">
          <div className="w-2/4 pr-2">
            <div>
              <img src={Foto3} alt="Foto1" className="w-full mt-10" />
              <h1 className="font-bold mt-2 text-2xl">
                Kementerian Kesehatan Rilis Hasil Survei Status Gizi Indonesia
                (SSGI) tahun 2024
              </h1>
              <br />
              <p className="text-justify">
                Stunting merupakan satu kondisi di mana pertumbuhan dan
                perkembangan anak terganggu, yang disebabkan karena kurangnya
                gizi maupun infeksi kronis pada 1.000 hari pertama kehidupan.
                Dokter Spesialis Anak Konsultan Endokrinologi Anak, Prof dr
                Madarina Julia, MPH., Ph.D, Sp.A (K), menjelaskan bahwa stunting
                erat kaitannya dengan asupan nutrisi yang buruk, infeksi
                berulang, dan stimulasi psikososial yang tidak memadai. "Anak
                stunting tentu mempunyai riwayat gizi dan riwayat kesehatan yang
                kurang baik. Selain itu, anak stunting juga sangat mungkin
                mengalami gangguan perkembangan," ungkap Madarina dalam webinar
                Pentingnya Pemantauan Tumbuh Kembang Terhadap Penegakkan Deteksi
                Dini Stunting pada Anak Indonesia, Kamis (24/2/2022). Sehingga,
                penting bagi orangtua untuk mendeteksi dini permasalahan
                stunting pada anak, dengan memantau tinggi badan, berat badan,
                lingkar kepala, serta dinilai perkembangannya. "Kita harus
                memantau pertumbuhan anak, apakah anak kita tumbuh dengan baik
                dilihat dari tinggi badannya, apakah anak terlalu kurus atau
                terlalu gemuk. Apakah dia berkembang sesuai dengan usianya,"
                kata Madarina. Lebih lanjut, dia berkata kecurigaan stunting
                pada anak dapat dilihat dari kondisi tubuhnya. Misalnya, apabila
                anak kurus, pendek, dan terjadi gangguan perkembangan
                kemungkinan besar dia mengalami stunting. Sebaliknya, jika anak
                pendek, tidak kurus, dan tanpa gangguan perkembangan maka dia
                tidak mengalami stunting.
              </p>
              <br />
              <br />
              <hr />
              <br />
              <Artikelkontak />
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

export default Detail3;
