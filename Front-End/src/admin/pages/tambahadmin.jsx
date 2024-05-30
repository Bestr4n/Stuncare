import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Tambahadmin = () => {
  const [adminData, setAdminData] = useState({
    nama_lengkap: "",
    email: "",
    password: "",
    status: "aktif",
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
      const response = await fetch("http://localhost:8081/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adminData),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Admin added successfully with ID: ${data.id}`);
        navigate("/admin/admin/admin");
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
    <div className="p-8 bg-white rounded-lg mx-auto shadow-lg mt-7 w-5/6">
      <h2 className="text-2xl font-bold mb-7">Tambah Admin</h2>
      {error && (
        <div className="mb-5 p-4 bg-red-100 text-red-700 rounded">{error}</div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block mb-2">Nama Lengkap:</label>
          <input
            type="text"
            name="nama_lengkap"
            value={adminData.nama_lengkap}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={adminData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2">Password:</label>
          <input
            type="password"
            name="password"
            value={adminData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Simpan
        </button>
      </form>
    </div>
  );
};

export default Tambahadmin;
