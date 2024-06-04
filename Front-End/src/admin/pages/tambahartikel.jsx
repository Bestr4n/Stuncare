import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Tambahartikel = () => {
  const [adminData, setAdminData] = useState({
    foto: null, // Mengatur foto menjadi null secara default
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminData({
      ...adminData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8081/article", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adminData),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Admin added successfully with ID: ${data.id}`);
        navigate("/admin/admin/articleadmin");
      } else {
        const errorData = await response.json();
        setError(errorData.message); // Set error message from backend
      }
    } catch (error) {
      console.error("Error adding admin:", error);
      setError("An error occurred while adding admin"); // Set generic error message
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
          htmlFor="author"
        >
          Image
        </label>
        <input
          type="file"
          id="foto"
          className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
          onChange={(e) =>
            setAdminData({ ...adminData, foto: e.target.files[0] || null })
          }
        />
        <div className="grid grid-cols-4 gap-4 mt-5">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="food-name"
            >
              Judul
            </label>
            <input
              type="text"
              id="judul"
              name="judul"
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
              className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
              placeholder="Enter author name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="food-name"
            >
              Lokasi
            </label>
            <input
              type="text"
              id="lokasi"
              name="lokasi"
              className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
              placeholder="Enter Location"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="author"
            >
              Tanggal Penerbitan
            </label>
            <input
              type="date"
              id="tanggal"
              name="tgl_penerbitan"
              className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
              placeholder="Enter Date Time"
              onChange={handleChange}
            />
          </div>

          <div className=" col-span-4 ">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              name="deskripsi"
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
