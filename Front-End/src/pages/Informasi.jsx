import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../assets/Informasi/informasi.png";
import Foto from "../assets/Informasi/informasi1.png";
import Card from "../assets/Informasi/card.png";
import Icon from "../assets/Informasi/icon.png";

const Informasi = () => {
  return (
    <>
      <img src={Header} alt="Layanan Header" className="w-full" />
      <div className="flex flex-col items-center mt-10">
        <div className="flex justify-center w-full">
          <img
            src={Foto}
            alt="Foto 1"
            className="w-2/3 h-auto"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          />
        </div>
        <h1
          className="text-4xl font-bold mt-10 mb-5 text-center"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Stunting Di Indonesia
        </h1>
        <div
          className="w-2/3"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <p className="mb-4">
            Kementerian Kesehatan mengumumkan hasil Survei Status Gizi Indonesia
            (SSGI) pada Rapat Kerja Nasional BKKBN, Rabu (25/1) dimana
            prevalensi stunting di Indonesia turun dari 24,4% di tahun 2021
            menjadi 21,6% di 2022. Presiden RI Joko Widodo mengatakan dalam
            forum tersebut stunting bukan hanya urusan tinggi badan tetapi yang
            paling berbahaya adalah rendahnya kemampuan anak untuk belajar,
            keterbelakangan mental, dan yang ketiga munculnya penyakit-penyakit
            kronis. Hasil SSGI ini untuk mengukur target stunting di Indonesia.
            Sebelumnya SSGI diukur 3 tahun sekali sampai 5 tahun sekali. Menkes
            mengatakan mulai 2021 SSGI dilakukan setiap tahun. Penurunan
            stunting ini terjadi di masa pandemi bukan terjadi di masa biasa.
            Menteri Kesehatan Budi Gunadi Sadikin mengharapkan di masa yang
            normal tahun ini penurunan kasus stunting diharapkan bisa lebih
            tajam lagi sehingga target penurunan stunting di angka 14% di 2024
            dapat tercapai.
          </p>
          <p className="mb-4">
            Status gizi balita merupakan salah satu indikator yang dapat
            digunakan untuk menunjukan kualitas hidup suatu masyarakat dan juga
            memberikan intervensi sehingga akibat lebih buruk dapat dicegah dan
            perencanaan lebih baik dapat dilakukan untuk mencegah anak-anak lain
            dari penyakit yang sama (Soekirman, 2000).
          </p>
          <p>
            Untuk mendukung pertumbuhan dan perkembangan pada masa balita, peran
            makanan dengan nilai gizi tinggi sangat penting seperti pada makanan
            sumber protein, vitamin A, vitamin B kompleks, vitamin C, vitamin D,
            kalsium, zat besi, yodium, fosfor, dan zink.
          </p>
        </div>
      </div>
      <div
        className="flex flex-col items-center mt-14"
        data-aos="flip-right"
        data-aos-duration="1500"
      >
        <div className="flex justify-center w-full">
          <img
            src={Card}
            alt="Foto 1"
            className="max-w-full md:max-w-2/3 h-auto"
          />
        </div>
      </div>
      <div
        className="flex flex-col items-center mt-10 mb-10"
        data-aos="flip-left"
        data-aos-duration="1500"
      >
        <div className="w-full py-10">
          <div className="flex flex-col space-y-4 text-black font-bold">
            <NavLink
              to="/detail1"
              className="flex items-center justify-between bg-purple-300 py-2 px-4 w-2/3 mx-auto"
            >
              <span>
                Kasus Stunting pada anak di Indonesia masih tinggi, Dokter
                ingatkan pentingnya deteksi dini
              </span>
              <img src={Icon} alt="" className="w-6 h-6" />
            </NavLink>
            <NavLink
              to="/detail2"
              className="flex items-center justify-between bg-purple-300 py-2 px-4 w-2/3 mx-auto"
            >
              <span>
                Dari Banyak Masalah Gizi, Kasus Stunting Paling Tinggi di
                Indonesia
              </span>
              <img src={Icon} alt="" className="w-6 h-6" />
            </NavLink>
            <NavLink
              to="/detail3"
              className="flex items-center justify-between bg-purple-300 py-2 px-4 w-2/3 mx-auto"
            >
              <span>
                Kementerian Kesehatan Rilis Hasil Survei Status Gizi Indonesia
                (SSGI) tahun 2024
              </span>
              <img src={Icon} alt="" className="w-6 h-6" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Informasi;
