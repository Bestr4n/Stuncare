import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const showUnderDevelopmentAlert = () => {
  Swal.fire({
    icon: "info",
    title: "Aplikasi Masih dalam tahap pengembangan",
    text: "Mohon maaf, fitur ini masih belum tersedia.",
  });
};

export { showUnderDevelopmentAlert };
