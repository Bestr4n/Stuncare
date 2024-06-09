import React from "react";

const EditModal = ({
  showModal,
  currentWebinar,
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
        <h2 className="text-2xl font-bold mb-4 text-center">Edit Webinar</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="judul" className="block mb-2">
            Judul:
            <input
              type="text"
              id="judul"
              name="judul"
              defaultValue={currentWebinar.judul}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              required
            />
          </label>
          <label htmlFor="tgl_webinar" className="block mb-2">
            Tanggal Webinar:
            <input
              type="date"
              id="tgl_webinar"
              name="tgl_webinar"
              defaultValue={currentWebinar.tgl_webinar}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              required
            />
          </label>
          <label htmlFor="kategori_webinar" className="block mb-2">
            Kategori Webinar:
            <select
              id="kategori_webinar"
              name="kategori_webinar"
              defaultValue="Pilih Kategori"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              required
            >
              <option disabled>Pilih Kategori</option>
              <option value="ZOOM">ZOOM</option>
              <option value="GMEET">GMEET</option>
              <option value="LURING">LURING</option>
            </select>
          </label>

          <label htmlFor="pembicara" className="block mb-2">
            Pembicara:
            <input
              type="text"
              id="pembicara"
              name="pembicara"
              defaultValue={currentWebinar.pembicara}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              required
            />
          </label>
          <label htmlFor="lokasi_webinar" className="block mb-2">
            Lokasi Webinar:
            <input
              type="text"
              id="lokasi_webinar"
              name="lokasi_webinar"
              defaultValue={currentWebinar.lokasi_webinar}
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
