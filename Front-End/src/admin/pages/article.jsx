import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import EditModal from "./modal/editartikel";
import { showSuccessAlert } from "../../utils/sweetAlert(hapus)";
import { showSuccessAlert2 } from "../../utils/sweetAlert(update)";

const Article = () => {
  const [articles, setArticles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null);

  const handleEdit = (article) => {
    setCurrentArticle(article);
    setShowModal(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target); // Gunakan FormData dari event.target

    fetch(`http://localhost:8081/article/${currentArticle.id}`, {
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
        console.log("Article updated successfully:", data);
        setArticles(
          articles.map((article) =>
            article.id === currentArticle.id ? data : article
          )
        );
        window.location.reload();
        handleCloseModal();
        showSuccessAlert2();
      })
      .catch((err) => {
        console.error("Error updating article:", err);
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8081/article/${id}`, {
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
        console.log("Article deleted successfully:", data);
        setArticles(articles.filter((article) => article.id !== id));
      })
      .catch((err) => {
        console.error("Error deleting article:", err);
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentArticle(null);
  };

  useEffect(() => {
    fetch("http://localhost:8081/article")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setArticles(data);
        } else {
          console.error("Data fetched is not an array:", data);
        }
      })
      .catch((err) =>
        console.error("There was an error fetching the articles!", err)
      );
  }, []);

  return (
    <>
      <section className="p-0 mt-0">
        <div className="flex ml-24">
          <NavLink
            to="/admin/admin/tambahartikel"
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
            {Array.isArray(articles) && articles.length > 0 ? (
              articles.map((article, index) => (
                <div
                  key={index}
                  className="relative w-[351px] h-auto bg-white shadow-lg rounded-[20px] p-4"
                >
                  <img
                    className="w-full h-[169px] rounded-[10px]"
                    src={article.foto}
                    alt={article.judul}
                  />
                  <div className="pt-4 pb-8 px-4 bg-white rounded-t-[30px] flex flex-col justify-start items-start gap-4">
                    <div className="flex justify-between items-center w-full">
                      <div className="flex items-center gap-2">
                        <div className="w-[15px] h-[16.54px] bg-gray-800"></div>
                        <div className="text-gray-500 text-[13px] font-open-sans font-semibold capitalize leading-[20.8px]">
                          {new Date(
                            article.tgl_penerbitan
                          ).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-[13px] h-[16.32px] bg-gray-800"></div>
                        <div className="text-gray-500 text-[14px] font-open-sans font-semibold capitalize leading-[22.4px]">
                          {article.author}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2.5">
                      <div className="w-full">
                        <div className="text-[#1F1E17] text-[17px] font-manrope font-extrabold leading-[30.8px]">
                          {article.judul}
                        </div>
                        <div className="text-[#878680] text-[16px] font-manrope font-medium leading-[30px] mt-2">
                          {article.deskripsi.substring(0, 100)}...
                        </div>
                        <div
                          style={{
                            display: "flex",
                            gap: "10px",
                            marginTop: "10px",
                          }}
                        >
                          <button
                            onClick={() => handleEdit(article)}
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
                            onClick={() => handleDelete(article.id)}
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
              <p>No articles available.</p>
            )}
          </div>
        </div>
      </section>

      {/* Modal Edit */}
      <EditModal
        showModal={showModal}
        currentArticle={currentArticle}
        handleCloseModal={handleCloseModal}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Article;
