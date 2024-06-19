-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 09, 2024 at 04:10 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stuncare`
--

-- --------------------------------------------------------

--
-- Table structure for table `artikel`
--

CREATE TABLE `artikel` (
  `id` int NOT NULL,
  `judul` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `author` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `lokasi` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `tgl_penerbitan` date NOT NULL,
  `deskripsi` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `foto` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `artikel`
--

INSERT INTO `artikel` (`id`, `judul`, `author`, `lokasi`, `tgl_penerbitan`, `deskripsi`, `foto`) VALUES
(1, 'STuntinh', 'Admin', 'Indonesia', '2022-04-10', 'Stunting merupakan satu kondisi di mana pertumbuhan dan perkembangan anak terganggu, yang disebabkan karena kurangnya gizi maupun infeksi kronis pada 1.000 hari pertama kehidupan.  Dokter Spesialis Anak Konsultan Endokrinologi Anak, Prof dr Madarina Julia, MPH., Ph.D, Sp.A (K), menjelaskan bahwa stunting erat kaitannya dengan asupan nutrisi yang buruk, infeksi berulang, dan stimulasi psikososial yang tidak memadai. \"Anak  stunting tentu mempunyai riwayat gizi dan riwayat kesehatan yang kurang baik. Selain itu, anak stunting juga sangat mungkin mengalami gangguan perkembangan,\" ungkap Madarina dalam webinar Pentingnya Pemantauan Tumbuh Kembang Terhadap Penegakkan Deteksi Dini Stunting pada Anak Indonesia, Kamis (24/2/2022). Sehingga,  penting bagi orangtua untuk mendeteksi dini permasalahan stunting pada anak, dengan memantau tinggi badan, berat badan, lingkar kepala, serta dinilai perkembangannya. \"Kita harus memantau pertumbuhan anak, apakah anak kita tumbuh dengan baik dilihat dari tinggi badannya, apakah anak terlalu kurus atau terlalu gemuk. Apakah dia berkembang sesuai dengan usianya,\"kata Madarina. Lebih lanjut, dia berkata kecurigaan stunting pada anak dapat dilihat dari kondisi tubuhnya. Misalnya, apabila anak kurus, pendek, dan terjadi gangguan perkembangan kemungkinan besar dia mengalami stunting. Sebaliknya, jika anak pendek, tidak kurus, dan tanpa gangguan perkembangan maka dia tidak mengalami stunting.', NULL),
(2, 'stunting', 'Admin', 'Indonesia', '2022-04-10', 'Stunting merupakan satu kondisi di mana pertumbuhan dan\r\n                perkembangan anak terganggu, yang disebabkan karena kurangnya\r\n                gizi maupun infeksi kronis pada 1.000 hari pertama kehidupan.\r\n                Dokter Spesialis Anak Konsultan Endokrinologi Anak, Prof dr\r\n                Madarina Julia, MPH., Ph.D, Sp.A (K), menjelaskan bahwa stunting\r\n                erat kaitannya dengan asupan nutrisi yang buruk, infeksi\r\n                berulang, dan stimulasi psikososial yang tidak memadai. \"Anak\r\n                stunting tentu mempunyai riwayat gizi dan riwayat kesehatan yang\r\n                kurang baik. Selain itu, anak stunting juga sangat mungkin\r\n                mengalami gangguan perkembangan,\" ungkap Madarina dalam webinar\r\n                Pentingnya Pemantauan Tumbuh Kembang Terhadap Penegakkan Deteksi\r\n                Dini Stunting pada Anak Indonesia, Kamis (24/2/2022). Sehingga,\r\n                penting bagi orangtua untuk mendeteksi dini permasalahan\r\n                stunting pada anak, dengan memantau tinggi badan, berat badan,\r\n                lingkar kepala, serta dinilai perkembangannya. \"Kita harus\r\n                memantau pertumbuhan anak, apakah anak kita tumbuh dengan baik\r\n                dilihat dari tinggi badannya, apakah anak terlalu kurus atau\r\n                terlalu gemuk. Apakah dia berkembang sesuai dengan usianya,\"\r\n                kata Madarina. Lebih lanjut, dia berkata kecurigaan stunting\r\n                pada anak dapat dilihat dari kondisi tubuhnya. Misalnya, apabila\r\n                anak kurus, pendek, dan terjadi gangguan perkembangan\r\n                kemungkinan besar dia mengalami stunting. Sebaliknya, jika anak\r\n                pendek, tidak kurus, dan tanpa gangguan perkembangan maka dia\r\n                tidak mengalami stunting.', NULL),
(4, '', 'Admin', 'Indonesia', '2022-04-10', 'Stunting merupakan satu kondisi di mana pertumbuhan dan\r\n                perkembangan anak terganggu, yang disebabkan karena kurangnya\r\n                gizi maupun infeksi kronis pada 1.000 hari pertama kehidupan.\r\n                Dokter Spesialis Anak Konsultan Endokrinologi Anak, Prof dr\r\n                Madarina Julia, MPH., Ph.D, Sp.A (K), menjelaskan bahwa stunting\r\n                erat kaitannya dengan asupan nutrisi yang buruk, infeksi\r\n                berulang, dan stimulasi psikososial yang tidak memadai. \"Anak\r\n                stunting tentu mempunyai riwayat gizi dan riwayat kesehatan yang\r\n                kurang baik. Selain itu, anak stunting juga sangat mungkin\r\n                mengalami gangguan perkembangan,\" ungkap Madarina dalam webinar\r\n                Pentingnya Pemantauan Tumbuh Kembang Terhadap Penegakkan Deteksi\r\n                Dini Stunting pada Anak Indonesia, Kamis (24/2/2022). Sehingga,\r\n                penting bagi orangtua untuk mendeteksi dini permasalahan\r\n                stunting pada anak, dengan memantau tinggi badan, berat badan,\r\n                lingkar kepala, serta dinilai perkembangannya. \"Kita harus\r\n                memantau pertumbuhan anak, apakah anak kita tumbuh dengan baik\r\n                dilihat dari tinggi badannya, apakah anak terlalu kurus atau\r\n                terlalu gemuk. Apakah dia berkembang sesuai dengan usianya,\"\r\n                kata Madarina. Lebih lanjut, dia berkata kecurigaan stunting\r\n                pada anak dapat dilihat dari kondisi tubuhnya. Misalnya, apabila\r\n                anak kurus, pendek, dan terjadi gangguan perkembangan\r\n                kemungkinan besar dia mengalami stunting. Sebaliknya, jika anak\r\n                pendek, tidak kurus, dan tanpa gangguan perkembangan maka dia\r\n                tidak mengalami stunting.', NULL),
(8, 'Judul Baru', 'Penulis Baru', 'Lokasi Baru', '2023-06-07', 'Deskripsi Baru', '1717729870123_IMG_20230430_080521.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id_customer` char(10) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `status` enum('aktif','off') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id_customer`, `nama`, `status`, `email`) VALUES
('CTM0001', 'admin', 'off', 'admin@gmail.com'),
('CTM0002', 'totok', 'off', 'totok@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `recipe`
--

CREATE TABLE `recipe` (
  `id_recipe` int NOT NULL,
  `food_name` varchar(100) NOT NULL,
  `author` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `kalori` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `durasi` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `porsi` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `usia` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `foto` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `recipe`
--

INSERT INTO `recipe` (`id_recipe`, `food_name`, `author`, `description`, `kalori`, `durasi`, `porsi`, `usia`, `foto`) VALUES
(1, 'Bubur Kacang Hijau Susu', 'Admin', 'Bubur Kacang Hijau Susu', '120', '2 hari', '2', '19', NULL),
(2, 'Bubur Udang Tahu', 'Admin', 'Bubur Udang Tahu', '120', '2 hari', '2', '19', NULL),
(3, 'Pure Brokoli Kentang Keju', 'admin', 'Pure Brokoli Kentang Keju', '22', '3 hari', '2', '12', NULL),
(4, 'Salad Buah dan Sayur', 'admin', 'Salad Buah dan Sayur', '22', '3 hari', '2', '12', NULL),
(6, 'Nama Makanan Baru', 'Penulis Baru', 'Deskripsi Baru', 'Kalori Baru', 'Durasi Baru', 'Porsi Baru', 'Usia Baru', NULL),
(10, 'tes', 'tes', 'tes', 'tes', 'tes', 'tes', 'tes', '1717755506968_IMG_20230430_080521.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `report`
--

CREATE TABLE `report` (
  `id_report` int NOT NULL,
  `nama` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(100) NOT NULL,
  `pesan` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `report`
--

INSERT INTO `report` (`id_report`, `nama`, `email`, `pesan`) VALUES
(3, 'Lukman Aji', 'LukmanAji@gmail.com', 'Website yang berguna'),
(4, 'Azwar Iranda', 'Azwar@gmail.com', 'Apk yang Baik'),
(7, 'John Doe', 'johndoe@example.com', 'This is a test message.'),
(8, 'totok', 'johndoe@example.com', 'This is a test message.'),
(9, 'admin', 'admin@gmail.com', 'admin'),
(10, 'admin', 'admin@gmail.com', 'admin\n'),
(12, 'Test Guruk', 'admin@gmail.com', 'tes');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` int NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `nama_lengkap` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `status` enum('off','aktif') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `email`, `password`, `nama_lengkap`, `status`) VALUES
(1, 'tes@gmail.com', 'tes', 'tes', 'off'),
(3, 'kurniawan@gmail.com', '1', 'kurniawan', 'off'),
(8, 'totokkurniawan710@gmail.com', '123', 'Totok Kurniawan', 'aktif'),
(10, 'admin@gmail.com', 'admin', 'admin', 'aktif');

-- --------------------------------------------------------

--
-- Table structure for table `webinar`
--

CREATE TABLE `webinar` (
  `id_webinar` int NOT NULL,
  `judul` varchar(200) NOT NULL,
  `tgl_webinar` date NOT NULL,
  `kategori_webinar` enum('zoom','meet','luring') NOT NULL,
  `pembicara` varchar(255) NOT NULL,
  `lokasi_webinar` varchar(255) NOT NULL,
  `foto` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `webinar`
--

INSERT INTO `webinar` (`id_webinar`, `judul`, `tgl_webinar`, `kategori_webinar`, `pembicara`, `lokasi_webinar`, `foto`) VALUES
(1, 'Webinar AI Update', '2024-06-12', 'meet', 'Dr. Jane Doe', 'Bandung', 'tes'),
(3, 'tes', '2001-02-02', 'meet', 'tes', 'tes', '1717860563889_IMG_20230430_080653.jpg'),
(4, 'tes', '2200-02-20', 'luring', 'tes', 'tes', '1717861665774_IMG_20230430_080512.jpg'),
(5, 'tes', '2001-02-02', 'luring', 'tes', 'tes', '1717861932028_IMG_20230430_080521.jpg'),
(6, 'asek', '2002-02-20', 'meet', 'asek', 'asek', '1717862356176_IMG_20230430_080521.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `artikel`
--
ALTER TABLE `artikel`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id_customer`);

--
-- Indexes for table `recipe`
--
ALTER TABLE `recipe`
  ADD PRIMARY KEY (`id_recipe`);

--
-- Indexes for table `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`id_report`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- Indexes for table `webinar`
--
ALTER TABLE `webinar`
  ADD PRIMARY KEY (`id_webinar`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `artikel`
--
ALTER TABLE `artikel`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `recipe`
--
ALTER TABLE `recipe`
  MODIFY `id_recipe` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `report`
--
ALTER TABLE `report`
  MODIFY `id_report` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `webinar`
--
ALTER TABLE `webinar`
  MODIFY `id_webinar` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
