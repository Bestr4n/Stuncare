import React from "react";
import Slicing from "../components/slicing";
import Header from "../assets/Produk/makanan.png";

const Rekomendasi = () => {
  return (
    <>
      <img src={Header} alt="" />
      <div
        className=" min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-15"
        data-aos="flip-up"
        data-aos-duration="2000"
      >
        <h1 className="text-4xl font-bold mb-6 text-center">
          Rekomendasi Makanan
        </h1>
        <h1 className="text-2xl font-bold mb-2 text-center text-purple-500">
          Makanan Sehat & Bergizi
        </h1>
        <Slicing />
      </div>
    </>
  );
};

export default Rekomendasi;
