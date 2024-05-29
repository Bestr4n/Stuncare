import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { FaEdit, FaTrash } from "react-icons/fa";

const CustomTable = ({ title, data }) => {
  const [filterStatus, setFilterStatus] = useState("");
  const filteredData = filterStatus
    ? data.filter((item) => item.status === filterStatus)
    : data;

  const handleEdit = (id) => {
    console.log(`Edit item with ID ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete item with ID ${id}`);
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
              row.status === "sukses"
                ? "#D1FAE5"
                : row.status === "canceled"
                ? "#FED7D7"
                : row.status === "pending"
                ? "#FEF3C7"
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
              backgroundColor:
                row.status === "sukses"
                  ? "green"
                  : row.status === "canceled"
                  ? "red"
                  : row.status === "pending"
                  ? "orange"
                  : "transparent",
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
            onClick={() => handleEdit(row.id)}
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
            onClick={() => handleDelete(row.id)}
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
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          {title}
        </h2>
        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <button
              onClick={() => setFilterStatus("")}
              style={{
                marginRight: "10px",
                padding: "8px 16px",
                backgroundColor: filterStatus === "" ? "#d1d1d1" : "#f1f1f1",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              All
            </button>
            <button
              onClick={() => setFilterStatus("sukses")}
              style={{
                marginRight: "10px",
                padding: "8px 16px",
                backgroundColor:
                  filterStatus === "sukses" ? "#D1FAE5" : "#f1f1f1",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Sukses
            </button>
            <button
              onClick={() => setFilterStatus("canceled")}
              style={{
                marginRight: "10px",
                padding: "8px 16px",
                backgroundColor:
                  filterStatus === "canceled" ? "#FED7D7" : "#f1f1f1",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Canceled
            </button>
            <button
              onClick={() => setFilterStatus("pending")}
              style={{
                marginRight: "10px",
                padding: "8px 16px",
                backgroundColor:
                  filterStatus === "pending" ? "#FEF3C7" : "#f1f1f1",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Pending
            </button>
          </div>
          <div>
            <button
              style={{
                marginRight: "10px",
                padding: "8px 16px",
                backgroundColor: "#4CAF50",
                border: "none",
                borderRadius: "4px",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Filter
            </button>
            <button
              style={{
                padding: "8px 16px",
                backgroundColor: "#2196F3",
                border: "none",
                borderRadius: "4px",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Export
            </button>
          </div>
        </div>
        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          paginationPerPage={10}
          customStyles={customStyles}
        />
      </div>
    </div>
  );
};

const Tablereport = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      status: "sukses",
      role: "customer",
      email: "john@example.com",
      totalOrders: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      status: "canceled",
      role: "customer",
      email: "jane@example.com",
      totalOrders: 8,
    },
    {
      id: 3,
      name: "Alice Johnson",
      status: "pending",
      role: "customer",
      email: "alice@example.com",
      totalOrders: 3,
    },
    {
      id: 4,
      name: "Bob Brown",
      status: "sukses",
      role: "customer",
      email: "bob@example.com",
      totalOrders: 6,
    },
    {
      id: 5,
      name: "Charlie Davis",
      status: "canceled",
      email: "charlie@example.com",
    },
    {
      id: 6,
      name: "David Lee",
      status: "pending",
      role: "customer",
      email: "david@example.com",
      totalOrders: 2,
    },
    {
      id: 7,
      name: "Eve Wilson",
      status: "sukses",
      role: "customer",
      email: "eve@example.com",
      totalOrders: 7,
    },
    {
      id: 8,
      name: "Frank Miller",
      status: "canceled",
      role: "customer",
      email: "frank@example.com",
      totalOrders: 4,
    },
    {
      id: 9,
      name: "Grace Taylor",
      status: "pending",
      role: "customer",
      email: "grace@example.com",
      totalOrders: 8,
    },
    {
      id: 10,
      name: "Harry Brown",
      status: "sukses",
      role: "customer",
      email: "harry@example.com",
      totalOrders: 6,
    },
  ];

  return (
    <div>
      <CustomTable title="Report Table" data={data} />
    </div>
  );
};

export default Tablereport;
