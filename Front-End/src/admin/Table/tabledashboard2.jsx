import React, { useState } from "react";
import DataTable from "react-data-table-component";

const Tabledashboard2 = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Totok",
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
  ]);

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
  ];

  return (
    <div style={{ height: "55vh", display: "flex" }}>
      <div style={{ flex: 1, overflowY: "auto" }}>
        <br />
        <DataTable columns={columns} data={data} customStyles={customStyles} />
      </div>
    </div>
  );
};

export default Tabledashboard2;
