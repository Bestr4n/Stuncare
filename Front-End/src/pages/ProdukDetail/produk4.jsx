import React, { useState } from "react";
import Slicing from "../../components/slicing";
import Header from "../../assets/Produk/produk.png";
import Foto1 from "../../assets/Produk/Produk-4.png";
import Foto2 from "../../assets/Produk/produk(4).png";

const Produk4 = () => {
  return (
    <>
      <img src={Header} alt="Header Image" className="mx-auto" />
      <div className="flex justify-center mt-5">
        <img src={Foto1} alt="Foto 1" className="w-2/3 h-auto" />
      </div>
      <div className="flex justify-center mt-5">
        <img src={Foto2} alt="Foto 2" className="w-2/3 h-auto" />
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-15">
        <h1 className="text-4xl font-bold mb-6 text-center">Resep Lainnya</h1>
        <h1 className="text-2xl font-bold mb-2 text-center text-purple-500">
          Makanan Sehat & Bergizi
        </h1>
        <Slicing />
      </div>
      <br />
      <br />
    </>
  );
};

export default Produk4;
