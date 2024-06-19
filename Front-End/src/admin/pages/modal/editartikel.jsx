import React from "react";

const EditModal = ({
  showModal,
  currentArticle,
  handleCloseModal,
  handleSubmit,
}) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div
        className="bg-white p-8 rounded shadow-md"
        style={{ width: "700px" }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Edit Article</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="judul" className="block mb-2">
            Judul:
            <input
              type="text"
              id="judul"
              name="judul"
              defaultValue={currentArticle.judul}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              required
            />
          </label>
          <label htmlFor="author" className="block mb-2">
            Author:
            <input
              type="text"
              id="author"
              name="author"
              defaultValue={currentArticle.author}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              required
            />
          </label>
          <label htmlFor="lokasi" className="block mb-2">
            Lokasi:
            <input
              type="text"
              id="lokasi"
              name="lokasi"
              defaultValue={currentArticle.lokasi}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              required
            />
          </label>
          <label htmlFor="tgl_penerbitan" className="block mb-2">
            Tanggal Penerbitan:
            <input
              type="date"
              id="tgl_penerbitan"
              name="tgl_penerbitan"
              defaultValue={currentArticle.tgl_penerbitan}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              required
            />
          </label>
          <label htmlFor="deskripsi" className="block mb-2">
            Deskripsi:
            <textarea
              id="deskripsi"
              name="deskripsi"
              defaultValue={currentArticle.deskripsi}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              required
            />
          </label>
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
