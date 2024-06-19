import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import EditModal from "./modal/editrecipe";
import { showSuccessAlert } from "../../utils/sweetAlert(hapus)";
import { showSuccessAlert2 } from "../../utils/sweetAlert(update)";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);

  // Memperbarui data resep
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch(`http://localhost:8081/recipe/${currentRecipe.id_recipe}`, {
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
        showSuccessAlert2();
        console.log("Recipe updated successfully:", data);
        handleCloseModal();
        window.location.reload();
      })
      .catch((err) => {
        console.error("Error updating recipe:", err);
      });
  };

  // Menampilkan modal edit resep
  const handleEdit = (recipe) => {
    console.log(recipe);
    setCurrentRecipe(recipe);
    setShowModal(true);
  };

  // Menutup modal
  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentRecipe(null);
  };

  // Menghapus resep
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
        showSuccessAlert();
        console.log("Recipe deleted successfully:", data);
        setRecipes(recipes.filter((recipe) => recipe.id !== id));
        window.location.reload();
      })
      .catch((err) => {
        console.error("Error deleting recipe:", err);
      });
  };

  // Mengambil data resep dari server saat komponen dimuat
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
        {/* Tambahkan tombol tambah resep */}
        <div className="flex ml-24">
          <NavLink
            to="/admin/admin/tambahrecipe"
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-10 ml-30"
          >
            +
          </NavLink>
        </div>

        {/* Tampilkan daftar resep */}
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
                        <div
                          className="text-gray-500 text-[14px] font-open-sans font-semibold capitalize leading-[
                      <22.4px]"
                        >
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

      <EditModal
        showModal={showModal}
        currentRecipe={currentRecipe}
        handleCloseModal={handleCloseModal}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Recipe;
