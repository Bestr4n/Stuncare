import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showSuccessAlert } from "../../utils/sweetAlert(nambah)";

const Tambahartikel = () => {
  const [judul, setJudul] = useState("");
  const [author, setAuthor] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [tglPenerbitan, setTglPenerbitan] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "judul":
        setJudul(value);
        break;
      case "author":
        setAuthor(value);
        break;
      case "lokasi":
        setLokasi(value);
        break;
      case "tgl_penerbitan":
        setTglPenerbitan(value);
        break;
      case "deskripsi":
        setDeskripsi(value);
        break;
      default:
        break;
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("judul", judul);
    formData.append("author", author);
    formData.append("lokasi", lokasi);
    formData.append("tgl_penerbitan", tglPenerbitan);
    formData.append("deskripsi", deskripsi);
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8081/createarticle", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        showSuccessAlert();
        navigate("/admin/admin/articleadmin");
      } else {
        const errorData = await response.json();
        setError(errorData.Error);
      }
    } catch (error) {
      console.error("Error adding artikel:", error);
      setError("An error occurred while adding artikel");
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg mx-auto shadow-lg mt-10 w-5/6">
      <h2 className="text-2xl font-bold mb-7">Tambah Article</h2>
      {error && (
        <div className="mb-5 p-4 bg-red-100 text-red-700 rounded">{error}</div>
      )}
      <form onSubmit={handleSubmit}>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="foto"
        >
          Image
        </label>
        <input
          type="file"
          id="foto"
          name="foto"
          className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
          onChange={handleFileChange}
        />
        <div className="grid grid-cols-4 gap-4 mt-5">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="judul"
            >
              Judul
            </label>
            <input
              type="text"
              id="judul"
              name="judul"
              value={judul}
              className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
              placeholder="Enter article name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="author"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={author}
              className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
              placeholder="Enter author name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lokasi"
            >
              Lokasi
            </label>
            <input
              type="text"
              id="lokasi"
              name="lokasi"
              value={lokasi}
              className="block w-full text-sm text-gray-500 border border-gray-
              300 rounded-md px-4 py-2"
              placeholder="Enter Location"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tgl_penerbitan"
            >
              Tanggal Penerbitan
            </label>
            <input
              type="date"
              id="tgl_penerbitan"
              name="tgl_penerbitan"
              value={tglPenerbitan}
              className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
              placeholder="Enter Date Time"
              onChange={handleChange}
            />
          </div>{" "}
          <div className="col-span-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="deskripsi"
            >
              Description
            </label>
            <textarea
              id="deskripsi"
              name="deskripsi"
              value={deskripsi}
              className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
              placeholder="Enter description"
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 mt-10"
        >
          Simpan
        </button>
      </form>
    </div>
  );
};

export default Tambahartikel;
