import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TambahRecipe = () => {
  const [recipeData, setRecipeData] = useState({
    foto: null, // Mengatur foto menjadi null secara default
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData({
      ...recipeData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8081/recipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipeData),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Recipe added successfully with ID: ${data.id}`);
        navigate("/admin/admin/recipeadmin");
      } else {
        const errorData = await response.json();
        setError(errorData.message); // Set error message from backend
      }
    } catch (error) {
      console.error("Error adding recipe:", error);
      setError("An error occurred while adding recipe"); // Set generic error message
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
          onChange={(e) =>
            setRecipeData({ ...recipeData, foto: e.target.files[0] || null })
          }
        />
        <div className="grid grid-cols-3 gap-2 mt-5">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2 "
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </div>
          <div className=" col-span-3">
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

export default TambahRecipe;
