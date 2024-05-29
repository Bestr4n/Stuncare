import React, { useState } from "react";
import logo from "../assets/resep1.png";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      console.log("File uploaded:", file);
    }
    handleCloseModal();
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // Reset file input value to allow selecting the same file again
    document.getElementById("file-upload").value = null;
  };

  return (
    <>
      <div className="flex items-center justify-center bg-gray-100 h-80vh">
        <div className="flex flex-col items-center justify-center h-full mt-16">
          <div
            className="bg-white p-6 rounded shadow-md"
            style={{ width: "500px", height: "450px", borderRadius: "20px" }}
          >
            <img
              className="w-full h-[169px] rounded-[10px]"
              src="https://www.svgrepo.com/show/73906/cloud-upload.svg"
              alt="placeholder"
            />
            <button
              className="block mx-auto text-sm text-gray-500 py-2 px-4 mt-10 rounded-full border border-gray-300 bg-gray-100 hover:bg-gray-200"
              onClick={handleOpenModal}
            >
              Choose File
            </button>
            <div className="text-center">
              <h3 className="text-2xl mb-4 mt-8">or</h3>
            </div>

            <div className="mb-4 justify-center text-center">
              <input
                type="file"
                id="file-upload"
                className="hidden"
                onChange={handleFileChange}
              />
              <div
                className="block w-full text-sm text-gray-500 py-2 px-4 text-bold"
                onClick={() => document.getElementById("file-upload").click()}
              >
                Drag & Drop files here to upload
              </div>
            </div>
            {file && (
              <div className="mb-4">
                <p className="text-gray-700">Selected file: {file.name}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <div
            className="bg-white p-8 rounded shadow-md"
            style={{ width: "600px" }}
          >
            <form onSubmit={handleSubmit}>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="author"
              >
                Image
              </label>
              <img src={logo} alt="" style={{ width: "300px" }} />
              <div className="grid grid-cols-3 gap-4">
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
                    className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
                    placeholder="Enter food name"
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
                    className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
                    placeholder="Enter author name"
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
                    className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
                    placeholder="Enter description"
                  ></textarea>
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
                    className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
                    placeholder="Enter calories"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="durasi-pemasakan"
                  >
                    Durasi Pemasakan
                  </label>
                  <input
                    type="text"
                    id="durasi-pemasakan"
                    className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
                    placeholder="Enter cooking duration"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="porsi"
                  >
                    Porsi yang dihasilkan
                  </label>
                  <input
                    type="text"
                    id="porsi"
                    className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
                    placeholder="Enter servings"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="usia"
                  >
                    Usia
                  </label>
                  <input
                    type="text"
                    id="usia"
                    className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-4 py-2"
                    placeholder="Enter age"
                  />
                </div>
                {/* Add other input fields in similar fashion */}
              </div>

              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600"
                >
                  Upload
                </button>
                <button
                  type="button"
                  className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Upload;
