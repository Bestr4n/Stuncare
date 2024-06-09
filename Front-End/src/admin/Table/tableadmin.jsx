import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FaEdit, FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { showSuccessAlert } from "../../utils/sweetAlert(hapus)";
import { showSuccessAlert2 } from "../../utils/sweetAlert(update)";

const Tableadmin = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/user")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editAdmin, setEditAdmin] = useState(null); // State untuk mengedit admin
  const [admins, setAdmins] = useState([]);
  const [error, setError] = useState(null);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setEditAdmin((prevAdmin) => ({ ...prevAdmin, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validasi input
      if (
        !editAdmin.nama_lengkap ||
        !editAdmin.email ||
        !editAdmin.password ||
        !editAdmin.status
      ) {
        throw new Error("All fields are required");
      }

      const response = await fetch(
        `http://localhost:8081/user/${editAdmin.id_user}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editAdmin),
        }
      );

      if (response.ok) {
        const updatedAdmins = await response.json();
        setAdmins(updatedAdmins);
        setEditAdmin(null);
        showSuccessAlert2();
        setIsModalOpen(false);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Tampilkan pesan error
      alert(error.message);
    }
  };

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await fetch("http://localhost:8081/user");
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        setAdmins(result);
      } catch (err) {
        setError(err.message);
        console.error(err);
      }
    };
    fetchAdmins();
  }, []);

  const handleEdit = (id) => {
    const adminToEdit = data.find((admin) => admin.id_user === id);
    setEditAdmin(adminToEdit);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    fetch(`http://localhost:8081/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        showSuccessAlert();
        console.log("Hapus Berhasil:", data);
        setData((prevData) => prevData.filter((item) => item.id_user !== id));
      })
      .catch((err) => {
        console.error("Error:", err);
        // Handle error
      });
  };
  const customStyles = {
    rows: {
      style: {
        minHeight: "56px",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#f1f1f1",
        },
      },
      headCells: {
        style: {
          paddingLeft: "8px",
          paddingRight: "8px",
        },
      },
      cells: {
        style: {
          paddingLeft: "8px",
          paddingRight: "8px",
        },
      },
    },
  };

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id_user,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.nama_lengkap,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor:
              row.status === "aktif"
                ? "#D1FAE5"
                : row.status === "off"
                ? "#FED7D7"
                : "transparent",
            padding: "4px",
            borderRadius: "4px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: row.status === "aktif" ? "green" : "red",
              marginRight: "8px",
            }}
          ></div>
          {row.status}
        </div>
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={() => handleEdit(row.id_user)}
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
            onClick={() => handleDelete(row.id_user)}
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
      ),
    },
  ];

  return (
    <div style={{ height: "83vh", display: "flex", position: "relative" }}>
      <div style={{ width: "5px", backgroundColor: "#f1f1f1" }}></div>
      <div style={{ flex: 1, overflowY: "auto", position: "relative" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>List Admin</h2>
          <NavLink
            to="/admin/admin/tambahadmin" // Rute untuk halaman tambah admin
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              padding: "5px 10px",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            Tambah Admin
          </NavLink>
        </div>
        <DataTable
          columns={columns}
          data={data}
          pagination
          paginationPerPage={10}
          customStyles={customStyles}
        />

        {isModalOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "5px",
                width: "500px",
                height: "460px",
                maxWidth: "90%",
              }}
            >
              <h2 className="font-bold text-2xl mb-7">Edit Admin</h2>
              <form onSubmit={handleFormSubmit}>
                <div style={{ marginBottom: "10px" }}>
                  <label>Nama:</label>
                  <input
                    type="text"
                    name="nama_lengkap"
                    value={editAdmin?.nama_lengkap || ""}
                    onChange={handleFormChange}
                    style={{
                      width: "100%",
                      padding: "5px",
                      border: "1px solid black",
                    }}
                    required
                  />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={editAdmin?.email || ""}
                    onChange={handleFormChange}
                    style={{
                      width: "100%",
                      padding: "5px",
                      border: "1px solid black",
                    }}
                    required
                  />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <label>Password:</label>
                  <input
                    type="text"
                    name="password"
                    value={editAdmin?.password || ""}
                    onChange={handleFormChange}
                    style={{
                      width: "100%",
                      padding: "5px",
                      border: "1px solid black",
                    }}
                    required
                  />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <label>Status:</label>
                  <select
                    name="status"
                    value={editAdmin?.status || ""}
                    onChange={handleFormChange}
                    style={{
                      width: "100%",
                      padding: "5px",
                      border: "1px solid black",
                    }}
                    required
                  >
                    <option value="">Pilih Status</option>
                    <option value="aktif">Active</option>
                    <option value="off">Offline</option>
                  </select>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={handleModalClose}
                    style={{
                      backgroundColor: "#dc3545",
                      color: "#fff",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      marginRight: "10px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#4CAF50",
                      color: "#fff",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tableadmin;
