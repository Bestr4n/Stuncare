import React from "react";
import {
  FaPinterest,
  FaInstagram,
  FaTelegram,
  FaFacebook,
} from "react-icons/fa";

const Artikelkontak = () => {
  return (
    <>
      <div>
        <ul className="flex space-x-4">
          <li className="font-bold text-xl">Tags</li>
          <li
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0px 21.6px 0px 20.7px",
              borderRadius: "10px",
              background: "var(--Primary, #756AB6)",
              color: "white",
              fontFamily: "Manrope",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "30px",
            }}
          >
            Stunting
          </li>
          <li
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0px 21.6px 0px 20.7px",
              borderRadius: "10px",
              background: "var(--Primary, #756AB6)",
              color: "white",
              fontFamily: "Manrope",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "30px",
            }}
          >
            Kesehatan
          </li>
          <li className="flex items-center">
            <ul className="flex justify-end space-x-4">
              <li>
                <a
                  href="#"
                  className="flex items-center bg-purple-500 rounded-full p-2 border border-purple-500"
                >
                  <FaPinterest className="h-4 w-4 text-white" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center bg-purple-500 rounded-full p-2 border border-purple-500"
                >
                  <FaInstagram className="h-4 w-4 text-white" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center bg-purple-500 rounded-full p-2 border border-purple-500"
                >
                  <FaTelegram className="h-4w-4 text-white" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center bg-purple-500 rounded-full p-2 border border-purple-500"
                >
                  <FaFacebook className="h-4 w-4 text-white" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="flex container mt-10">
        <div>
          <h1 className="text-4xl font-bold mb-4">Tanggapi Artikel</h1>
          <div className="flex space-x-2">
            <input type="checkbox" className="" id="saveInfo" name="saveInfo" />
            <label htmlFor="saveInfo" style={{ fontSize: "14px" }}>
              Simpan nama saya, email, dan situs web dalam peramban ini untuk
              komentar saya berikutnya.
            </label>
          </div>
          <div className="flex flex-col space-y-2 mt-4">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Name"
                className="p-2 border border-gray-300 rounded-md flex-grow text-sm"
              />
              <input
                type="text"
                placeholder="Email"
                className="p-2 border border-gray-300 rounded-md flex-grow text-sm"
              />
            </div>
            <textarea
              name="text-area"
              id="text-area"
              className="p-2 border border-gray-300 rounded-md flex-grow text-sm"
              placeholder="Tulis tanggapan anda terkait berita diatas"
              style={{ height: "200px" }}
            ></textarea>

            <button
              className="rounded bg-purple-700 text-white px-4 py-2 mt-2"
              type="submit"
            >
              Kirim Pesan
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Artikelkontak;
