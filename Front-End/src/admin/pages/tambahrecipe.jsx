import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showSuccessAlert } from "../../utils/sweetAlert(nambah)";

const TambahRecipe = () => {
  const [food_name, setFoodName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [kalori, setKalori] = useState("");
  const [durasi, setDurasi] = useState("");
  const [porsi, setPorsi] = useState("");
  const [usia, setUsia] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("food_name", food_name);
    formData.append("author", author);
    formData.append("description", description);
    formData.append("kalori", kalori);
    formData.append("durasi", durasi);
    formData.append("porsi", porsi);
    formData.append("usia", usia);
    if (file) {
      formData.append("file", file);
    }

    try {
      const response = await fetch("http://localhost:8081/createrecipe", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        showSuccessAlert();
        navigate("/admin/admin/recipeadmin");
      } else {
        const errorData = await response.json();
        setError(errorData.Error || "Something went wrong");
      }
    } catch (err) {
      setError("Network error: " + err.message);
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg mx-auto shadow-lg mt-7 w-3/4">
      <h2 className="text-2xl font-bold mb-7">Tambah Recipe</h2>
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
          className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
          onChange={handleFileChange}
        />
        <div className="grid grid-cols-3 gap-2 mt-5">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="food-name"
            >
              Food Name
            </label>
            <input
              type="text"
              id="food-name"
              name="food_name"
              className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
              placeholder="Enter food name"
              value={food_name}
              onChange={(e) => setFoodName(e.target.value)}
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
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="kalori"
            >
              Kalori
            </label>
            <input
              type="text"
              id="kalori"
              name="kalori"
              className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
              placeholder="Enter calories"
              value={kalori}
              onChange={(e) => setKalori(e.target.value)}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="durasi"
            >
              Durasi
            </label>
            <input
              type="text"
              id="durasi"
              name="durasi"
              className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
              placeholder="Enter duration"
              value={durasi}
              onChange={(e) => setDurasi(e.target.value)}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="porsi"
            >
              Porsi
            </label>
            <input
              type="text"
              id="porsi"
              name="porsi"
              className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
              placeholder="Enter servings"
              value={porsi}
              onChange={(e) => setPorsi(e.target.value)}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="usia"
            >
              Usia
            </label>
            <input
              type="text"
              id="usia"
              name="usia"
              className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
              placeholder="Enter age"
              value={usia}
              onChange={(e) => setUsia(e.target.value)}
            />
          </div>
          <div className="col-span-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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

export default TambahRecipe;
