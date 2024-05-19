import React from "react";
import backgroundImage from "../assets/Home/Frame2.png";
import Logo from "../assets/Home/phone.png";
import webImg from "../assets/Home/card1.png";
import appImg from "../assets/Home/card2.png";
import graphicImg from "../assets/Home/card3.png";
import digitalImg from "../assets/Home/card4.png";
import backgroundImage2 from "../assets/Home/Frame2.png";
import Slicing from "../components/slicing";
import Logo6 from "../assets/Home/rayana.png";
import { useState } from "react";
import artikel1 from "../assets/Home/artikel1.png";
import artikel2 from "../assets/Home/artikel2.png";
import artikel3 from "../assets/Home/artikel3.png";
import img from "../assets/Home/stunt1.png";
import { NavLink } from "react-router-dom";

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`h-8 w-8 fill-current ${
            index < rating ? "text-yellow-500" : "text-gray-400"
          } cursor-pointer`}
          onClick={() => handleClick(index + 1)}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.61 9.334a1 1 0 0 0-.823-.674l-6.36-.918L12.853.42A1 1 0 0 0 12.002 0c-.334 0-.649.165-.841.439l-3.584 7.32-6.36.918a1 1 0 0 0-.55 1.705l4.63 4.507-1.093 6.36a1 1 0 0 0 1.451 1.054L12 17.24l5.74 3.01a1 1 0 0 0 1.452-1.053l-1.094-6.36 4.631-4.507a1 1 0 0 0 .268-1.031zM12 15.246a1 1 0 0 0 .276-.038l5.115-2.684-1.018-5.926a1 1 0 0 0-.29-.572l-4.18-4.064 1.874-3.828a1 1 0 0 0 .066-.942l-3.39-6.91 5.894 1.015a1 1 0 0 0 .752-.179L12 2.332l2.985 6.115a1 1 0 0 0 .751.18l5.893-1.015-3.39 6.91a1 1 0 0 0 .066.942l1.874 3.828-4.18 4.064a1 1 0 0 0-.29.573l-1.018 5.926 5.115 2.684a1 1 0 0 0 .275.038l-6.06-.876-2.588-2.52-2.587 2.52-6.06.877z"
          />
        </svg>
      ))}
    </div>
  );
};

const Home = () => {
  const Heading = (props) => {
    return (
      <div>
        <h3 className=" text-2xl font-semibold">
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

  const CheckCircleIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#AC87C5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );

  const Button = (props) => {
    return (
      <div>
        <button className=" bg-white py-2 px-5 rounded-full mt-4 outline hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-purple-500 hover:text-white transition-all">
          {props.title}
        </button>
      </div>
    );
  };

  const ArtikelCard = ({ imgSrc, title, description, description1, to }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={imgSrc} alt="Artikel" className="w-full h-48 object-cover" />
        <div className="p-4">
          <p className="text-sm text-gray-600">{description}</p>
          <p className="text-sm text-gray-600 mb-4">{description1}</p>
          <NavLink
            to={to}
            className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300 ease-in-out"
          >
            Selengkapnya
          </NavLink>
        </div>
      </div>
    );
  };

  const artikelData = [
    {
      imgSrc: artikel1,
      description: "Kasus Stunting pada",
      description1: "anak di Indonesia masih..",
    },
    {
      imgSrc: artikel2,
      description: "Dari Banyak Masalah Gizi, ",
      description1: "Kasus Stunting..",
    },
    {
      imgSrc: artikel3,
      description: "Kementerian Kesehatan",
      description1: "Rilis Hasil Survei..",
    },
  ];

  return (
    <>
      <div className="relative">
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-4xl p-8 rounded-lg">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:ml-15 mb-8 lg:mb-0">
                <img
                  src={Logo}
                  alt="Stunt-Care Logo"
                  className="w-70 cursor-pointer"
                />
              </div>
              <div className="ml-0 lg:ml-8 flex flex-col items-center lg:items-start">
                <div>
                  <h1 className="text-3xl lg:text-5xl font-bold text-gray-200 text-center lg:text-left">
                    Lindungi Diri Dengan <br />
                    Asupan Gizi
                  </h1>
                  <p className="mt-4 text-lg text-gray-200 text-center lg:text-left">
                    Welcome to stuncare. Temukan solusi permasalahan asupan gizi
                    anda dengan Stuncare Dengan Cepat Tanpa Ribet. Layanan
                    informasi lengkap dan terpadu.
                  </p>
                </div>
                <div className="mt-6 lg:mt-8 flex flex-col lg:flex-row items-center">
                  <NavLink
                    to="/about"
                    className="mt-4 lg:mt-2 px-8 py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700"
                  >
                    Pelajari lebih lanjut
                  </NavLink>
                  <div className="mt-4 lg:mt-0 lg:absolute lg:right-20 lg:bottom-20 ">
                    <button className="px-8 py-2.5 bg-white text-purple-600 font-semibold rounded-md border border-purple-600 hover:bg-purple-600 hover:text-white">
                      Install Aplikasi
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-8">
          <div className="max-w-full md:max-w-[632px] h-[30px] text-[#AC87C5] text-2xl font-extrabold font-manrope">
            Mengapa Harus Memilih Stuncare?
          </div>
          <br />
          <br />
          <div className="max-w-full md:max-w-[1473px] h-[115px] text-stone-900 text-4xl font-extrabold font-manrope">
            Beberapa Keunggulan Stuncare{" "}
            <p>akan membuat anda ingin selalu menggunakannya</p>
          </div>
        </div>

        <div className="flex justify-center space-x-8">
          <div className="w-80  px-6 py-20 bg-white rounded-3xl border border-zinc-300 flex-col justify-start items-start gap-6 inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="12 2 22 12 12 22 2 12 12 2" />
            </svg>
            <div className="self-stretch  flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch text-gray-900 text-base font-bold font-poppins leading-snug">
                Cepat
              </div>
            </div>
            <div className="self-stretch text-gray-900/opacity-60 text-sm font-normal font-poppins leading-relaxed">
              Stuncare terbukti cepat memproses laporan sehingga akan menghemat
              waktu anda
            </div>
          </div>

          <div className="w-80 px-6 py-20 bg-white rounded-3xl border border-zinc-300 flex-col justify-start items-start gap-6 inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="12 2 22 12 12 22 2 12 12 2" />
            </svg>

            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch text-gray-900 text-base font-bold font-poppins leading-snug">
                Efisien
              </div>
            </div>
            <div className="self-stretch text-gray-900/opacity-60 text-sm font-normal font-poppins leading-relaxed">
              Stuncare memberikan solusi efisien untuk masalah gizi sehingga
              anda dapat fokus pada hal lainnya
            </div>
          </div>

          <div className="w-80 px-6 py-20 bg-white rounded-3xl border border-zinc-300 flex-col justify-start items-start gap-6 inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="12 2 22 12 12 22 2 12 12 2" />
            </svg>
            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch text-gray-900 text-base font-bold font-poppins leading-snug">
                Cepat
              </div>
            </div>
            <div className="self-stretch text-gray-900/opacity-60 text-sm font-normal font-poppins leading-relaxed">
              Stuncare terbukti cepat memproses laporan sehingga akan menghemat
              waktu anda
            </div>
          </div>

          <div className="w-80 px-6 py-20 bg-white rounded-3xl border border-zinc-300 flex-col justify-start items-start gap-6 inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="12 2 22 12 12 22 2 12 12 2" />
            </svg>
            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch text-gray-900 text-base font-bold font-poppins leading-snug">
                Efisien
              </div>
            </div>
            <div className="self-stretch text-gray-900/opacity-60 text-sm font-normal font-poppins leading-relaxed">
              Stuncare memberikan solusi efisien untuk masalah gizi sehingga
              anda dapat fokus pada hal lainnya
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center md:px-32 px-5 my-10">
        <Heading title1="Layanan" title2="Kami" />
        <h1 className="text-4xl font-extrabold text-gray-900">
          Layanan yang kami tawarkan
        </h1>
        <div className="flex flex-row justify-center gap-6 mt-6">
          <LayananCard img={webImg} to="/informasi" title="Informasi Gizi" />
          <LayananCard
            img={appImg}
            to="/rekomendasi"
            title="Rekomendasi Makanan"
          />
          <LayananCard
            img={graphicImg}
            to="/konsultasi"
            title="Konsultasi Ahli"
          />
          <LayananCard
            img={digitalImg}
            to="/prediction"
            title="Prediksi Gizi"
          />
        </div>
      </div>

      <div
        className="relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px", // Atur tinggi sesuai kebutuhan Anda
        }}
      >
        <h1 className="text-5xl font-bold text-gray-200">
          Lindungi Diri Dengan Asupan Gizi
        </h1>
      </div>

      <div className=" min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-15">
        <h1 className="text-4xl font-extrabold text-gray-900">Makanan Sehat</h1>
        <Heading title1="Layanan" title2="Kami" />
        <Slicing />
      </div>

      <div className="relative">
        <div className="flex justify-center md:mx-32 mx-8 pb-20">
          <div className="relative w-full max-w-6xl p-8 rounded-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:ml-8 flex flex-col items-center md:items-start">
                <h3 className="text-2xl font-bold text-purple-400">
                  Ulasan Produk Kami
                </h3>
                <h1 className="text-4xl font-bold text-gray-700 text-center md:text-left">
                  Apa pendapat mereka tentang Stuncare?
                </h1>
                <p className="mt-4 text-lg text-gray-800 text-center md:text-left">
                  Stuntcare memberikan informasi yang bermanfaat bagi saya,
                  sebagai seorang ibu yang peduli terhadap masa tumbuh kembang
                  anak.
                </p>
                <button className="mt-6 px-8 py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700">
                  Lihat Semua Tanggapan
                </button>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center mt-8 md:mt-0 md:ml-8">
                <div className="md:w-80 h-32 border-dotted border-2.9 border-purple-400 mr-6 mb-4 md:mb-0">
                  <img
                    className="w-full h-full object-cover"
                    src={Logo6}
                    alt="Logo"
                  />
                </div>
                <div>
                  <p className="text-lg text-gray-800">
                    Stuntcare memberikan informasi yang bermanfaat bagi saya,
                    sebagai seorang ibu yang peduli terhadap masa tumbuh kembang
                    anak.
                  </p>
                  <div className="flex items-center mt-4">
                    <h3 className="text-2xl font-bold text-purple-400 mr-4">
                      Rayana
                    </h3>
                    <Rating />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gray-100 py-20">
        <div className="flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
          <div className="w-full md:w-1/2 pr-10 md:pr-20">
            <img src={img} alt="img" className="w-full h-auto md:max-h-96" />
          </div>
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <h2 className="text-4xl font-semibold leading-tight">
              Kenapa memilih <br />
              Stuncare?
            </h2>
            <p className="text-lightText mt-5">
              StuntingCare menyediakan fitur informasi yang lengkap
              <br />
              tentang informasi gizi dan dilengkapi dengan aplikasi
              <br />
              berbasis mobile yang dapat anda gunakan dengan mudah.
            </p>
            <div className="mt-8">
              <div className="flex items-center">
                <CheckCircleIcon className="text-green-500" />
                <div className="ml-4">
                  <h3 className="text-gray-900 font-bold text-2xl">
                    Informasi Gizi yang lengkap
                  </h3>
                  <p className="text-gray-700 font-medium text-lg">
                    Informasi mengenai stunting dan gizi penting yang diperoleh
                    dari makanan sehat.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center">
                <CheckCircleIcon className="text-green-500" />
                <div className="ml-4">
                  <h3 className="text-gray-900 font-bold text-2xl">
                    Konsultasi dengan Mudah
                  </h3>
                  <p className="text-gray-700 font-medium text-lg">
                    Dapat melakukan konsultasi dengan para ahli.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center">
                <CheckCircleIcon className="text-green-500" />
                <div className="ml-4">
                  <h3 className="text-gray-900 font-bold text-2xl">
                    Gratis Tanpa Biaya
                  </h3>
                  <p className="text-gray-700 font-medium text-lg">
                    Tidak dipungut biaya.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <NavLink
                to="/contact"
                spy={true}
                smooth={true}
                duration={500}
                className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300 ease-in-out"
              >
                Pelajari lebih lanjut
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center md:px-32 px-5 my-10">
        <Heading title1="Berita &" title2="Artikel" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {artikelData.map((artikel, index) => (
            <ArtikelCard
              key={index}
              imgSrc={artikel.imgSrc}
              title={artikel.title}
              description={artikel.description}
              description1={artikel.description1}
              to={`/detail${index + 1}`} // Adjust the URL based on your route configuration
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
