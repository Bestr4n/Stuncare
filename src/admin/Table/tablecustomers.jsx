import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { FaEdit, FaTrash } from "react-icons/fa";

const Tablecustomers = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "John Doe",
      status: "active",
      role: "customer",
      email: "john@example.com",
      totalOrders: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      status: "offline",
      role: "customer",
      email: "jane@example.com",
      totalOrders: 8,
    },
    {
      id: 3,
      name: "Alice Johnson",
      status: "active",
      role: "customer",
      email: "alice@example.com",
      totalOrders: 3,
    },
    {
      id: 4,
      name: "Bob Brown",
      status: "offline",
      role: "customer",
      email: "bob@example.com",
      totalOrders: 6,
    },
    {
      id: 5,
      name: "Charlie Davis",
      status: "active",
      role: "customer",
      email: "charlie@example.com",
      totalOrders: 9,
    },
    {
      id: 6,
      name: "David Lee",
      status: "offline",
      role: "customer",
      email: "david@example.com",
      totalOrders: 2,
    },
    {
      id: 7,
      name: "Eve Wilson",
      status: "active",
      role: "customer",
      email: "eve@example.com",
      totalOrders: 7,
    },
    {
      id: 8,
      name: "Frank Miller",
      status: "offline",
      role: "customer",
      email: "frank@example.com",
      totalOrders: 4,
    },
    {
      id: 9,
      name: "Grace Taylor",
      status: "active",
      role: "customer",
      email: "grace@example.com",
      totalOrders: 8,
    },
    {
      id: 10,
      name: "Harry Brown",
      status: "offline",
      role: "customer",
      email: "harry@example.com",
      totalOrders: 6,
    },
  ]);
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
              row.status === "active"
                ? "#D1FAE5"
                : row.status === "offline"
                ? "#FED7D7" // Red light color
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
      name: "Role",
      selector: (row) => row.role,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
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
    <div style={{ height: "83vh", display: "flex" }}>
      <div style={{ width: "5px", backgroundColor: "#f1f1f1" }}>
        {/* Sidebar content */}
      </div>
      <div style={{ flex: 1, overflowY: "auto" }}>
        <DataTable
          title={
            <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
              List Customers
            </h2>
          }
          columns={columns}
          data={data}
          pagination
          paginationPerPage={10}
          customStyles={customStyles}
        />
      </div>
    </div>
  );
};

export default Tablecustomers;
