import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const showSuccessAlert = () => {
  Swal.fire({
    icon: "success",
    title: "Data berhasil ditambahkan!",
    showConfirmButton: false,
    timer: 1500,
  });
};

export { showSuccessAlert };
