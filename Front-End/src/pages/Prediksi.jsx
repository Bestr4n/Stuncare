import React, { useState } from "react";
import Header from "../assets/Prediksi/home.png";
import Foto1 from "../assets/Prediksi/prediksi.png";

const Prediksi = () => {
  const [formData, setFormData] = useState({
    umurAnak: "",
    jenisKelamin: "",
    tinggiBadan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img src={Header} alt="" style={{ width: "100%" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          width: "100%",
          marginTop: "10px",
          maxWidth: "1000px",
        }}
        data-aos="flip-right"
        data-aos-duration="2000"
      >
        <div
          style={{
            flex: 1,
            padding: "0 10px",
            marginTop: "20px",
            marginRight: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={Foto1}
            alt=""
            style={{
              width: "100%",
              height: "90%",
              maxHeight: "600px",
              marginBottom: "20px",
            }}
          />
        </div>
        <div
          style={{
            flex: 1,
            padding: "20px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <div
              className="form-item"
              style={{ marginBottom: "15px", width: "100%" }}
            >
              <label htmlFor="tanggalLahir">Umur Anak</label>
              <input
                type="number"
                id="umurAnak"
                name="umurAnak"
                value={formData.umurAnak}
                onChange={handleChange}
                style={{
                  width: "85%",
                  padding: "2px",
                  marginTop: "5px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
            </div>

            <div
              className="form-item"
              style={{ marginBottom: "15px", width: "100%" }}
            >
              <label>Jenis Kelamin</label>
              <div
                style={{
                  marginTop: "5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <input
                  type="radio"
                  id="laki-laki"
                  name="jenisKelamin"
                  value="Laki-Laki"
                  checked={formData.jenisKelamin === "Laki-Laki"}
                  onChange={handleChange}
                  style={{ marginRight: "5px" }}
                />
                <label htmlFor="laki-laki">Laki-Laki</label>
                <input
                  type="radio"
                  id="perempuan"
                  name="jenisKelamin"
                  value="Perempuan"
                  checked={formData.jenisKelamin === "Perempuan"}
                  onChange={handleChange}
                  style={{ marginLeft: "20px", marginRight: "5px" }}
                />
                <label htmlFor="perempuan">Perempuan</label>
              </div>
            </div>
            <div
              className="form-item"
              style={{ marginBottom: "15px", width: "100%" }}
            >
              <label htmlFor="tinggiBadan">Tinggi Badan (cm)</label>
              <input
                type="number"
                id="tinggiBadan"
                name="tinggiBadan"
                value={formData.tinggiBadan}
                onChange={handleChange}
                style={{
                  width: "85%",
                  padding: "2px",
                  marginTop: "5px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: "30%",
                padding: "2px",
                backgroundColor: "#6f42c1",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                alignSelf: "flex-start",
                marginBottom: "6px",
                marginTop: "6px",
              }}
            >
              Simpan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Prediksi;
