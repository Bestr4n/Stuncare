import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FaTrash } from "react-icons/fa";
import { showSuccessAlert } from "../../utils/sweetAlert(hapus)";

const CustomTable = ({ title, data, setData }) => {
  const handleDelete = (id) => {
    fetch(`http://localhost:8081/report/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.message === "report sukses") {
          showSuccessAlert();
          setData((prevData) =>
            prevData.filter((item) => item.id_report !== id)
          );
        } else {
          console.error("Gagal menghapus data:", response.message);
        }
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
  };

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id_report,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.nama,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Pesan",
      selector: (row) => row.pesan,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={() => handleDelete(row.id_report)}
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
        <DataTable
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

const Tablereport = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/report")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <CustomTable title="Report Table" data={data} setData={setData} />
    </div>
  );
};

export default Tablereport;
