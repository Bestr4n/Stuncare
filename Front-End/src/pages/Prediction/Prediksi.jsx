import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Header from "../../assets/Prediksi/home.png";
import Foto1 from "../../assets/Prediksi/prediksi.png";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/predict", {
        umur: formData.umurAnak,
        jenis_kelamin: formData.jenisKelamin === "Laki-Laki" ? 0 : 1,
        tinggi_badan: formData.tinggiBadan,
      });

      const prediction = response.data.prediction;
      let resultText = "";
      if (prediction === 0) {
        resultText =
          "Status Gizi Bayi anda tergolong ke dalam kategori Severely Stunted";
      } else if (prediction === 1) {
        resultText =
          "Status Gizi Bayi anda tergolong ke dalam kategori Stunted";
      } else if (prediction === 2) {
        resultText = "Status Gizi Bayi anda tergolong ke dalam kategori Normal";
      } else if (prediction === 3) {
        resultText = "Status Gizi Bayi anda tergolong ke dalam kategori Tinggi";
      } else {
        resultText = "Masukan Data Dengan Benar";
      }

      Swal.fire({
        title: "Hasil Prediksi",
        text: resultText,
        icon: "info",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("There was an error making the request:", error);
      Swal.fire({
        title: "Error",
        text: "Terjadi kesalahan. Silakan coba lagi.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
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
