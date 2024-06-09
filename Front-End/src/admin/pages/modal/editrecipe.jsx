import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const EditModal = ({
  showModal,
  currentRecipe,
  handleCloseModal,
  handleSubmit,
}) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center">
      <div
        className="bg-white p-8 rounded shadow-md"
        style={{ width: "700px" }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Edit Recipe</h2>

        <form onSubmit={handleSubmit}>
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
                defaultValue={currentRecipe.food_name}
                className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
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
                defaultValue={currentRecipe.author}
                className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
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
                defaultValue={currentRecipe.kalori}
                className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
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
                defaultValue={currentRecipe.durasi}
                className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
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
                defaultValue={currentRecipe.porsi}
                className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
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
                defaultValue={currentRecipe.usia}
                className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
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
                defaultValue={currentRecipe.description}
                className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2 mb-5"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleCloseModal}
            className="bg-red-500 text-white px-4 py-2 rounded-lg ml-2"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
