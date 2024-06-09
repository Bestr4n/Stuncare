import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showSuccessAlert } from "../../utils/sweetAlert(nambah)";

const Tambahwebinar = () => {
  const [judul, setJudul] = useState("");
  const [kategoriWebinar, setKategoriWebinar] = useState("Pilih Kategori");
  const [pembicara, setPembicara] = useState("");
  const [lokasiWebinar, setLokasiWebinar] = useState("");
  const [tglWebinar, setTglWebinar] = useState("");
  const [foto, setFoto] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "judul":
        setJudul(value);
        break;
      case "kategori_webinar":
        setKategoriWebinar(value);
        break;
      case "pembicara":
        setPembicara(value);
        break;
      case "lokasi_webinar":
        setLokasiWebinar(value);
        break;
      case "tgl_webinar":
        setTglWebinar(value);
        break;
      default:
        break;
    }
  };

  const handleFileChange = (e) => {
    setFoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("judul", judul);
    formData.append("tgl_webinar", tglWebinar);
    formData.append("kategori_webinar", kategoriWebinar);
    formData.append("pembicara", pembicara);
    formData.append("lokasi_webinar", lokasiWebinar);
    formData.append("file", foto);

    try {
      const response = await fetch("http://localhost:8081/createwebinar", {
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
      console.error("Error adding webinar:", error);
      setError("An error occurred while adding webinar");
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg mx-auto shadow-lg mt-10 w-5/6">
      <h2 className="text-2xl font-bold mb-7">Tambah Webinar</h2>
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
        <div className="grid grid-cols-2 gap-4 mt-5">
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
              placeholder="Enter webinar name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="pembicara"
            >
              Pembicara
            </label>
            <input
              type="text"
              id="pembicara"
              name="pembicara"
              value={pembicara}
              className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
              placeholder="Enter speaker name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lokasi_webinar"
            >
              Lokasi Webinar
            </label>
            <input
              type="text"
              id="lokasi_webinar"
              name="lokasi_webinar"
              value={lokasiWebinar}
              className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
              placeholder="Enter webinar location"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tgl_webinar"
            >
              Tanggal Webinar
            </label>
            <input
              type="date"
              id="tgl_webinar"
              name="tgl_webinar"
              value={tglWebinar}
              className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
              onChange={handleChange}
            />
          </div>
          <div className="col-span-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="kategori_webinar"
            >
              Kategori Webinar
            </label>
            <select
              id="kategori_webinar"
              name="kategori_webinar"
              value={kategoriWebinar}
              onChange={handleChange}
              className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
            >
              <option value="" disabled>
                Pilih Kategori
              </option>
              <option value="ZOOM">ZOOM</option>
              <option value="MEET">GMEET</option>
              <option value="LURING">LURING</option>
            </select>
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

export default Tambahwebinar;
