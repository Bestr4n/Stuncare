import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

const Tabledashboard2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8081/customeronline");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
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
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.nama,
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
              backgroundColor: row.status === "aktif" ? "green" : "red",
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
