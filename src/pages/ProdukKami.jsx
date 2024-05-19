import React from "react";
import { NavLink } from "react-router-dom";
import Foto1 from "../assets/ProdukKami/poto1.png";
import Foto2 from "../assets/ProdukKami/poto2.png";
import Foto3 from "../assets/ProdukKami/playstore.png";
import Header from "../assets/ProdukKami/headerprodukkami.png";

const ProdukKami = () => {
  return (
    <>
      <img src={Header} alt="" />
      <div className="produk-kami-container p-8 bg-white text-gray-800 flex flex-col lg:flex-row items-center">
        <div className="lg:w-2/3 w-full flex justify-center mb-2 lg:mb-0">
          <img
            src={Foto2}
            alt="Team"
            className="w-full lg:w-auto lg:max-w-lg"
          />
        </div>
        <div className="lg:w-2/3 w-full lg:pl-10">
          <h1 className="text-4xl font-bold mb-6 mr-7">
            Aplikasi Stuncare Akan Memandumu
          </h1>
          <p className="text-lg leading-relaxed mb-6 mr-7">
            Dengan Stuncare, mengelola kondisi gizi dan memperoleh bantuan untuk
            mengatasi stunting tidak pernah semudah ini. Segera dapatkan
            aplikasinya dan mulailah perjalanan kesehatan gizi Anda hari ini.
            <img
              src={Foto3}
              alt="playstore"
              style={{ width: 150, height: 40 }}
            />
          </p>
        </div>
      </div>

      <div className="produk-kami2-container p-8 bg-gray-100 text-gray-800 flex flex-col lg:flex-row items-center ">
        <div className="lg:w-2/3 w-full lg:pl-40">
          <h1 className="text-purple-500 font-bold text-xl ">
            Fitur Utama Stuncare
          </h1>
          <h1 className="text-4xl font-bold mb-0 mr-7">
            2 Fitur Utama Yang Kami Sediakan
          </h1>
          <p className="text-lg leading-relaxed ">
            Kami memahami kebutuhan mendesak dalam penanggulangan stunting di
            desa Anda. Stuncare menawarkan dua fitur utama yang menghadirkan
            revolusi dalam perawatan gizi: Prediksi Gizi Anak dan Ibu Hamil
          </p>
          <br />
          <div className="flex">
            <div className="w-1/2 ">
              <h1 className="font-bold">Prediksi Gizi Anak</h1>
              <p>
                Prediski gizi dapat dilakukan dengan cara menggunakan data usia,
                berat, dan tinggi badan anak. Hasil prediksi akan mempengaruhi
                saran penanganan lebih lanjut terkait tidakan serta kebutuhan
                anak .
              </p>
              <br />
              <br />
              <NavLink to="/prediction" className="text-purple-500">
                Pelajari Lebih Lanjut
              </NavLink>
            </div>
            <div className="w-1/2 ">
              <h1 className="font-bold">Prediksi Gizi Ibu Hamil</h1>
              <p>
                Prediiksi gizi dapat dilakukan dengan cara menggunakan data yang
                telah diinput oleh pengguna(user). Data yang diinput akan
                digunakan untuk pertimabangan saran yang akan diberikan kepada
                penggguna(user).
              </p>
              <br />
              <NavLink to="/prediction" className="text-purple-500">
                Pelajari Lebih Lanjut
              </NavLink>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3 w-full flex justify-center mb-6 lg:mb-0">
          <img
            src={Foto1}
            alt="Team"
            className="w-full lg:w-auto lg:max-w-lg"
          />
        </div>
      </div>
    </>
  );
};

export default ProdukKami;
