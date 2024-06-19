import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import EditModal from "./modal/editwebinar";
import { showSuccessAlert } from "../../utils/sweetAlert(hapus)";
import { showSuccessAlert2 } from "../../utils/sweetAlert(update)";

const Webinar = () => {
  const [webinar, setWebinar] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentWebinar, setCurrentWebinar] = useState(null);

  const handleEdit = (webinar) => {
    setCurrentWebinar(webinar);
    setShowModal(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch(`http://localhost:8081/webinar/${currentWebinar.id_webinar}`, {
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
        console.log("Webinar updated successfully:", data);
        setWebinar(
          webinar.map((item) => (item.id === currentWebinar.id ? data : item))
        );
        handleCloseModal();
        showSuccessAlert2();
        window.location.reload();
      })
      .catch((err) => {
        console.error("Error updating webinar:", err);
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8081/webinar/${id}`, {
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
        console.log("Webinar deleted successfully:", data);
        setWebinar(webinar.filter((item) => item.id !== id));
        window.location.reload();
      })
      .catch((err) => {
        console.error("Error deleting webinar:", err);
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentWebinar(null);
  };

  useEffect(() => {
    fetch("http://localhost:8081/webinar")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setWebinar(data);
        } else {
          console.error("Data fetched is not an array:", data);
        }
      })
      .catch((err) =>
        console.error("There was an error fetching the webinars!", err)
      );
  }, []);

  return (
    <>
      <section className="p-0 mt-0">
        <div className="flex ml-24">
          <NavLink
            to="/admin/admin/tambahwebinar"
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
            {Array.isArray(webinar) && webinar.length > 0 ? (
              webinar.map((webinar, index) => (
                <div
                  key={index}
                  className="relative w-[351px] h-auto bg-white shadow-lg rounded-[20px] p-4"
                >
                  <img
                    className="w-full h-[169px] rounded-[10px]"
                    src={webinar.foto}
                    alt={webinar.judul}
                  />
                  <div className="pt-4 pb-8 px-4 bg-white rounded-t-[30px] flex flex-col justify-start items-start gap-4">
                    <div className="flex justify-between items-center w-full">
                      <div className="flex items-center gap-2">
                        <div className="w-[15px] h-[16.54px] bg-gray-800"></div>
                        <div className="text-gray-500 text-[13px] font-open-sans font-semibold capitalize leading-[20.8px]">
                          {new Date(webinar.tgl_webinar).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2.5">
                      <div className="w-full">
                        <div className="text-[#1F1E17] text-[17px] font-manrope font-extrabold leading-[30.8px]">
                          {webinar.judul}
                        </div>
                        <div className="text-[#878680] text-[16px] font-manrope font-medium leading-[30px] mt-2">
                          {webinar.kategori_webinar}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            gap: "10px",
                            marginTop: "10px",
                          }}
                        >
                          <button
                            onClick={() => handleEdit(webinar)}
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
                            onClick={() => handleDelete(webinar.id_webinar)}
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
              <p>No webinars available.</p>
            )}
          </div>
        </div>
      </section>

      {showModal && (
        <EditModal
          showModal={showModal}
          currentWebinar={currentWebinar}
          handleCloseModal={handleCloseModal}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default Webinar;
