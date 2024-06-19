import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Chat from "./components/chat";
import Informasi from "./pages/Informasi";
import Layanan from "./pages/Layanan";
import ProdukKami from "./pages/ProdukKami";
import Kontak from "./pages/Kontak";
import Home from "./pages/Home";
import About from "./pages/About";
import Arcticle from "./pages/Article";
import Prediksi from "./pages/Prediction/Prediksi";
import Rekomendasi from "./pages/Rekomendasi";
import Produk1 from "./pages/ProdukDetail/produk1";
import Produk2 from "./pages/ProdukDetail/produk2";
import Produk3 from "./pages/ProdukDetail/produk3";
import Produk4 from "./pages/ProdukDetail/produk4";
import Produk5 from "./pages/ProdukDetail/produk5";
import Detail1 from "./pages/ArtikelDetail/detail1";
import Detail2 from "./pages/ArtikelDetail/detail2";
import Detail3 from "./pages/ArtikelDetail/detail3";
import Sidebar from "./admin/components/sidebar";
import NavbarAdmin from "./admin/components/navbar";
import ArticleAdmin from "./admin/pages/article";
import Webinar from "./admin/pages/webinar";
import Admin from "./admin/pages/admin";
import Customer from "./admin/pages/customer";
import Dashboard from "./admin/pages/dashboard";
import Recipe from "./admin/pages/recipe";
import Report from "./admin/pages/report";
import Login from "./admin/pages/login";
import Tambahadmin from "./admin/pages/tambahadmin";
import Tambahrecipe from "./admin/pages/tambahrecipe";
import Tambahartikel from "./admin/pages/tambahartikel";
import Tambahwebinar from "./admin/pages/tambahwebinar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Public />} />
        <Route path="/login" element={<LoginAdmin />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </Router>
  );
}

function Public() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Layanan />} />
        <Route path="product" element={<ProdukKami />} />
        <Route path="article" element={<Arcticle />} />
        <Route path="contact" element={<Kontak />} />
        <Route path="informasi" element={<Informasi />} />
        <Route path="prediction" element={<Prediksi />} />
        <Route path="rekomendasi" element={<Rekomendasi />} />
        <Route path="produk1" element={<Produk1 />} />
        <Route path="produk2" element={<Produk2 />} />
        <Route path="produk3" element={<Produk3 />} />
        <Route path="produk4" element={<Produk4 />} />
        <Route path="produk5" element={<Produk5 />} />
        <Route path="detail1" element={<Detail1 />} />
        <Route path="detail2" element={<Detail2 />} />
        <Route path="detail3" element={<Detail3 />} />
      </Routes>
      <Footer />
      <Chat />
    </>
  );
}

function LoginAdmin() {
  return (
    <Routes>
      <Route index element={<Login />} />
    </Routes>
  );
}

function AdminRoutes() {
  return (
    <div className="flex bg-[#F1F1FF]">
      <Sidebar />
      <div className="flex-1" style={{ overflowY: "auto" }}>
        <NavbarAdmin />
        <Routes>
          <Route path="/*" element={<Dashboard />} />
          <Route path="admin/dashboardadmin" element={<Dashboard />} />
          <Route path="admin/articleadmin" element={<ArticleAdmin />} />
          <Route path="admin/customeradmin" element={<Customer />} />
          <Route path="admin/recipeadmin" element={<Recipe />} />
          <Route path="admin/reportadmin" element={<Report />} />
          <Route path="admin/webinaradmin" element={<Webinar />} />
          <Route path="admin/admin" element={<Admin />} />
          <Route path="/admin/tambahadmin" element={<Tambahadmin />} />
          <Route path="/admin/tambahrecipe" element={<Tambahrecipe />} />
          <Route path="/admin/tambahartikel" element={<Tambahartikel />} />
          <Route path="/admin/tambahwebinar" element={<Tambahwebinar />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
