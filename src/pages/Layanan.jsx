import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../assets/Layanan/Layanan.png";
import Foto from "../assets/Layanan/dokter.png";
import Background from "../assets/Layanan/Frame2.png";
import Card1 from "../assets/Layanan/card1.png";
import Card2 from "../assets/Layanan/card2.png";
import Card3 from "../assets/Layanan/card3.png";
import Card4 from "../assets/Layanan/card4.png";

const Heading = (props) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold">
        <span className="text-[#AC87C5]">
          {props.title1} {props.title2}
        </span>
      </h3>
    </div>
  );
};
const LayananCard = (props) => {
  return (
    <NavLink
      to={props.to}
      className="flex flex-col items-center justify-between bg-white border-2 border-lightText md:border-none md:w-2/5 p-5 cursor-pointer rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
    >
      <div className="w-3/5">
        <img src={props.img} alt={props.title} className="w-full" />
      </div>
      <div className="w-64 h-60 relative rounded-lg">
        <div className="w-56 h-32 left-4 top-20 absolute bg-white rounded-lg shadow">
          <div className="w-36 h-14 left-10 top-8 absolute text-center text-stone-900 text-xl font-extrabold font-manrope leading-7">
            {props.title.split(" ").map((word, index) => (
              <div key={index}>{word}</div>
            ))}
          </div>
        </div>
        <button className="w-28 h-11 left-20 bottom-3 top-38 absolute bg-purple-500 rounded-lg text-white text-xs font-bold font-manrope leading-9 hover:bg-slate-500 hover:text-white transition duration-300 ease-in-out">
          Read More
        </button>
      </div>
    </NavLink>
  );
};

const Layanan = () => {
  return (
    <>
      <img src={Header} alt="Layanan Header" className="w-full" />
      <div className="flex flex-col items-center md:px-32 px-5 my-10">
        <Heading title1="Layanan" title2="Kami" />
        <h1 className="text-4xl font-extrabold text-gray-900">
          Layanan yang kami tawarkan
        </h1>
        <div className="flex flex-row justify-center gap-6 mt-6">
          <LayananCard img={Card1} to="/informasi" title="Informasi Gizi" />
          <LayananCard
            img={Card2}
            to="/rekomendasi"
            title="Rekomendasi Makanan"
          />
          <LayananCard img={Card3} to="/konsultasi" title="Konsultasi Ahli" />
          <LayananCard img={Card4} to="/prediction" title="Prediksi Gizi" />
        </div>
      </div>

      <div
        className="relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px", // Atur tinggi sesuai kebutuhan Anda
        }}
      >
        <h1 className="text-5xl font-bold text-gray-200">
          Lindungi Diri Dengan Asupan Gizi
        </h1>
      </div>

      <div className="layanan-container p-8 bg-white text-gray-800 flex flex-col lg:flex-row items-center mb-10">
        <div className="lg:w-3/3 w-full flex justify-center mb-4 lg:mb-0">
          <img src={Foto} alt="Team" className="w-full lg:w-auto lg:max-w-lg" />
        </div>
        <div className="lg:w-3/3 w-full lg:pl-10">
          <h3 className="text-3xl font-bold mb-4 text-purple-500">Cek Gizi</h3>
          <h1 className="text-4xl font-bold mb-6">Prediksi Gizi Anda</h1>
          <p className="text-lg leading-relaxed mb-6">
            Fitur ini dapat membantu anda memprediksi gizi yang telah anda
            konsumsi atau dapatkan. Prediksi yang diberikan akan membantu anda
            mendapatkan informasi sehingga dapat mengatasi stunting ataupun
            kekurangan gizi.
            <br />
            <br />
            Tunggu apa lagi? Silahkan cek gizi anda bersama kami.
          </p>
          <NavLink
            to="/prediction"
            className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          >
            Mulai Prediksi
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Layanan;
