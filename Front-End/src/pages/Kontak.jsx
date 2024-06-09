import React, { useState } from "react";
import Header from "../assets/Kontak/kontak.png";
import Foto from "../assets/Kontak/kontak-1.png";
import Playstore from "../assets/ProdukKami/playstore.png";

const Kontak = () => {
  const [reportData, setReportData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8081/report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reportData),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`successfully with ID: ${data.id}`);

        // Kosongkan form setelah berhasil mengirimkan data
        setReportData({
          nama: "",
          email: "",
          pesan: "",
        });
      } else {
        const errorData = await response.json();
        setError(errorData.message); // Set error message from backend
      }
    } catch (error) {
      console.error("Error :", error);
      setError("An error occurred while adding admin"); // Set generic error message
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReportData({
      ...reportData,
      [name]: value,
    });
  };

  return (
    <>
      <img src={Header} alt="Layanan Header" className="w-full" />
      <div
        className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 w-full md:w-2/3"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="w-full p-2 bg-[#756AB6] rounded-lg shadow">
          {/* Card 1 */}
          <div className="mt-2">
            <p className="text-lg font-semibold ml-4">Tentang Kami</p>
            <p className="text-black ml-4">
              Stuncare adalah solusi inovatif yang dirancang untuk mengatasi
              permasalahan gizi dengan cepat dan efisien.
            </p>
          </div>
        </div>
        <div className="w-full p-2 bg-[#AC87C5] rounded-lg shadow">
          {/* Card 2 */}
          <div className="mt-2">
            <p className="text-lg font-semibold ml-4">Kontak Kami</p>
            <p className="text-black ml-4">
              +1- (246) 333-0079 <br /> stuncare@gmail.com
            </p>
          </div>
        </div>
        <div className="w-full p-2 bg-[#E0AED0] rounded-lg shadow">
          {/* Card 3 */}
          <div className="mt-2">
            <p className="text-lg font-semibold ml-4">Alamat</p>
            <p className="text-black ml-4">
              Temukan StunCare di:
              <img
                src={Playstore}
                alt="playstore"
                className="mt-2"
                style={{ width: "150px", height: "40px" }}
              />
            </p>
          </div>
        </div>
      </div>

      <div className="kontak-container p-8 bg-white text-gray-800 flex flex-col lg:flex-row items-center justify-center">
        <div
          className="lg:w-1/2 w-full flex justify-center lg:justify-end lg:mb-0"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img src={Foto} alt="Team" className="w-full lg:w-auto lg:max-w-lg" />
        </div>
        <div
          className="lg:w-1/2 w-full lg:pl-8 flex justify-center lg:justify-start"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="contact-info text-center lg:text-left w-full">
            <h2 className="text-2xl font-bold mt-0 text-purple-500">
              Hubungi Kami
            </h2>
            <h1 className="text-4xl font-bold mb-4 ">Tuliskan Pesan.</h1>
            <form
              className="flex flex-col"
              style={{
                background:
                  "url(<path-to-image>) lightgray -21.02px 436px / 103.003% 30.794% no-repeat",
              }}
              onSubmit={handleSubmit}
            >
              <label htmlFor="nama">Nama:</label>
              <input
                type="text"
                id="nama"
                name="nama"
                className="mb-2 p-2 border border-gray-300 rounded"
                value={reportData.nama}
                onChange={handleChange}
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mb-2 p-2 border border-gray-300 rounded"
                value={reportData.email}
                onChange={handleChange}
              />

              <label htmlFor="message">Pesan:</label>
              <textarea
                id="pesam"
                name="pesan"
                className="mb-2 p-2 border border-gray-300 rounded"
                value={reportData.pesan}
                onChange={handleChange}
              ></textarea>

              <button
                className="rounded bg-purple-500 text-white px-4 py-2 mt-2"
                type="submit"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kontak;
