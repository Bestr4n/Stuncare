import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleEdit = (recipe) => {
    setCurrentRecipe(recipe);
    setShowModal(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("food_name", document.getElementById("food-name").value);
    formData.append("author", document.getElementById("author").value);
    formData.append(
      "description",
      document.getElementById("description").value
    );
    formData.append("foto", file || null);

    fetch(`http://localhost:8081/recipe/${currentRecipe.id}`, {
      method: "PUT",
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Recipe updated successfully:", data);
        handleCloseModal();
      })
      .catch((err) => {
        console.error("Error updating recipe:", err);
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8081/recipe/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Recipe deleted successfully:", data);
        setRecipes(recipes.filter((recipe) => recipe.id !== id));
      })
      .catch((err) => {
        console.error("Error deleting recipe:", err);
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentRecipe(null);
    document.getElementById("file-upload").value = null;
  };

  useEffect(() => {
    fetch("http://localhost:8081/recipe")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setRecipes(data);
        } else {
          console.error("Data fetched is not an array:", data);
        }
      })
      .catch((err) =>
        console.error("There was an error fetching the recipes!", err)
      );
  }, []);

  return (
    <>
      <section className="p-0 mt-0">
        <div className="flex ml-24">
          <NavLink
            to="/admin/admin/tambahrecipe"
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-10 ml-30"
          >
            +
          </NavLink>
        </div>

        <div
          className="ml-48 justify-center mt-0 mb-20"
          style={{ height: "63vh", overflowY: "scroll" }}
        >
          <div className="flex gap-6 flex-wrap">
            {Array.isArray(recipes) && recipes.length > 0 ? (
              recipes.map((recipe, index) => (
                <div
                  key={index}
                  className="relative w-[351px] h-auto bg-white shadow-lg rounded-[20px] p-4"
                >
                  <img
                    className="w-full h-[169px] rounded-[10px]"
                    src={recipe.foto}
                    alt={recipe.food_name}
                  />
                  <div className="pt-4 pb-8 px-4 bg-white rounded-t-[30px] flex flex-col justify-start items-start gap-4">
                    <div className="flex justify-between items-center w-full">
                      <div className="flex items-center gap-2">
                        <div className="w-[15px] h-[16.54px] bg-gray-800"></div>
                        <div className="text-gray-500 text-[13px] font-open-sans font-semibold capitalize leading-[20.8px]">
                          {recipe.durasi}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-[13px] h-[16.32px] bg-gray-800"></div>
                        <div className="text-gray-500 text-[14px] font-open-sans font-semibold capitalize leading-[22.4px]">
                          {recipe.author}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2.5">
                      <div className="w-full">
                        <div className="text-[#1F1E17] text-[17px] font-manrope font-extrabold leading-[30.8px]">
                          {recipe.food_name}
                        </div>
                        <div className="text-[#878680] text-[16px] font-manrope font-medium leading-[30px] mt-2">
                          {recipe.description}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            gap: "10px",
                            marginTop: "10px",
                          }}
                        >
                          <button
                            onClick={() => handleEdit(recipe)}
                            style={{
                              backgroundColor: "#4CAF50",
                              color: "white",
                              border: "none",
                              padding: "10px",
                              cursor: "pointer",
                            }}
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => handleDelete(recipe.id_recipe)}
                            style={{
                              backgroundColor: "#f44336",
                              color: "white",
                              border: "none",
                              padding: "10px",
                              cursor: "pointer",
                            }}
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No recipes available.</p>
            )}
          </div>
        </div>
      </section>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <div
            className="bg-white p-8 rounded shadow-md"
            style={{ width: "600px" }}
          >
            <form onSubmit={handleSubmit}>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="foto"
              >
                Foto:
              </label>
              <input
                type="file"
                id="file-upload"
                onChange={handleFileChange}
                className="mb
                -4"
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="food-name"
              >
                Food Name:
              </label>
              <input
                type="text"
                id="food-name"
                defaultValue={currentRecipe.food_name}
                className="mb-4 w-full p-2 border rounded"
                required
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="author"
              >
                Author:
              </label>
              <input
                type="text"
                id="author"
                defaultValue={currentRecipe.author}
                className="mb-4 w-full p-2 border rounded"
                required
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description:
              </label>
              <textarea
                id="description"
                defaultValue={currentRecipe.description}
                className="mb-4 w-full p-2 border rounded"
                required
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Recipe;
