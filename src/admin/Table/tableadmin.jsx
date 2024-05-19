import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { FaEdit, FaTrash } from "react-icons/fa";

const Tableadmin = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "John Doe",
      status: "active",
      role: "customer",
      email: "john@example.com",
      totalOrders: 5,
    },
    // Data lainnya
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAdmin, setNewAdmin] = useState({
    name: "",
    email: "",
    role: "",
    status: "",
  });

  const handleEdit = (id) => {
    console.log(`Edit item with ID ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete item with ID ${id}`);
  };

  const handleAddAdmin = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewAdmin((prevAdmin) => ({ ...prevAdmin, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setData((prevData) => [
      ...prevData,
      { ...newAdmin, id: prevData.length + 1 },
    ]);
    setNewAdmin({ name: "", email: "", role: "", status: "" });
    setIsModalOpen(false);
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
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
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
              row.status === "active"
                ? "#D1FAE5"
                : row.status === "offline"
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
              backgroundColor: row.status === "active" ? "green" : "red",
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
        <div>
          <button onClick={() => handleEdit(row.id)}>
            <FaEdit />
          </button>
          <button onClick={() => handleDelete(row.id)}>
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
          <button
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              padding: "5px 10px",
              borderRadius: "5px",
              marginBottom: "5px",
            }}
            onClick={handleAddAdmin}
          >
            Tambah Admin
          </button>
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
              <h2 className="font-bold text-2xl mb-7">Tambah Admin</h2>
              <form onSubmit={handleFormSubmit}>
                <div style={{ marginBottom: "10px" }}>
                  <label>Nama:</label>
                  <input
                    type="text"
                    name="name"
                    value={newAdmin.name}
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
                    value={newAdmin.email}
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
                  <label>Role:</label>
                  <input
                    type="text"
                    name="role"
                    value={newAdmin.role}
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
                    value={newAdmin.status}
                    onChange={handleFormChange}
                    style={{
                      width: "100%",
                      padding: "5px",
                      border: "1px solid black",
                    }}
                    required
                  >
                    <option value="">Pilih Status</option>
                    <option value="active">Active</option>
                    <option value="offline">Offline</option>
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
                      marginTop: "30px",
                    }}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#007bff",
                      color: "#fff",
                      padding: "5px 10px",
                      borderRadius: "5px",
                    }}
                  >
                    Submit
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
