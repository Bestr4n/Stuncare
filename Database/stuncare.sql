-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 31, 2024 at 01:50 AM
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
  `judul` varchar(100) NOT NULL,
  `author` char(10) NOT NULL,
  `lokasi` char(10) NOT NULL,
  `tgl_penerbitan` date NOT NULL,
  `deskripsi` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `foto` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `artikel`
--

INSERT INTO `artikel` (`judul`, `author`, `lokasi`, `tgl_penerbitan`, `deskripsi`, `foto`) VALUES
('  Kasus Stunting pada anak di Indonesia masih tinggi, Dokter ingatkan pentingnya deteksi dini', 'Admin', 'Indonesia', '2022-04-10', 'Stunting merupakan satu kondisi di mana pertumbuhan dan perkembangan anak terganggu, yang disebabkan karena kurangnya gizi maupun infeksi kronis pada 1.000 hari pertama kehidupan.  Dokter Spesialis Anak Konsultan Endokrinologi Anak, Prof dr Madarina Julia, MPH., Ph.D, Sp.A (K), menjelaskan bahwa stunting erat kaitannya dengan asupan nutrisi yang buruk, infeksi berulang, dan stimulasi psikososial yang tidak memadai. \"Anak  stunting tentu mempunyai riwayat gizi dan riwayat kesehatan yang kurang baik. Selain itu, anak stunting juga sangat mungkin mengalami gangguan perkembangan,\" ungkap Madarina dalam webinar Pentingnya Pemantauan Tumbuh Kembang Terhadap Penegakkan Deteksi Dini Stunting pada Anak Indonesia, Kamis (24/2/2022). Sehingga,  penting bagi orangtua untuk mendeteksi dini permasalahan stunting pada anak, dengan memantau tinggi badan, berat badan, lingkar kepala, serta dinilai perkembangannya. \"Kita harus memantau pertumbuhan anak, apakah anak kita tumbuh dengan baik dilihat dari tinggi badannya, apakah anak terlalu kurus atau terlalu gemuk. Apakah dia berkembang sesuai dengan usianya,\"kata Madarina. Lebih lanjut, dia berkata kecurigaan stunting pada anak dapat dilihat dari kondisi tubuhnya. Misalnya, apabila anak kurus, pendek, dan terjadi gangguan perkembangan kemungkinan besar dia mengalami stunting. Sebaliknya, jika anak pendek, tidak kurus, dan tanpa gangguan perkembangan maka dia tidak mengalami stunting.', NULL),
('Dari Banyak Masalah Gizi, Kasus Stunting Paling Tinggi di\r\n                Indonesia', 'Admin', 'Indonesia', '2022-04-10', 'Stunting merupakan satu kondisi di mana pertumbuhan dan\r\n                perkembangan anak terganggu, yang disebabkan karena kurangnya\r\n                gizi maupun infeksi kronis pada 1.000 hari pertama kehidupan.\r\n                Dokter Spesialis Anak Konsultan Endokrinologi Anak, Prof dr\r\n                Madarina Julia, MPH., Ph.D, Sp.A (K), menjelaskan bahwa stunting\r\n                erat kaitannya dengan asupan nutrisi yang buruk, infeksi\r\n                berulang, dan stimulasi psikososial yang tidak memadai. \"Anak\r\n                stunting tentu mempunyai riwayat gizi dan riwayat kesehatan yang\r\n                kurang baik. Selain itu, anak stunting juga sangat mungkin\r\n                mengalami gangguan perkembangan,\" ungkap Madarina dalam webinar\r\n                Pentingnya Pemantauan Tumbuh Kembang Terhadap Penegakkan Deteksi\r\n                Dini Stunting pada Anak Indonesia, Kamis (24/2/2022). Sehingga,\r\n                penting bagi orangtua untuk mendeteksi dini permasalahan\r\n                stunting pada anak, dengan memantau tinggi badan, berat badan,\r\n                lingkar kepala, serta dinilai perkembangannya. \"Kita harus\r\n                memantau pertumbuhan anak, apakah anak kita tumbuh dengan baik\r\n                dilihat dari tinggi badannya, apakah anak terlalu kurus atau\r\n                terlalu gemuk. Apakah dia berkembang sesuai dengan usianya,\"\r\n                kata Madarina. Lebih lanjut, dia berkata kecurigaan stunting\r\n                pada anak dapat dilihat dari kondisi tubuhnya. Misalnya, apabila\r\n                anak kurus, pendek, dan terjadi gangguan perkembangan\r\n                kemungkinan besar dia mengalami stunting. Sebaliknya, jika anak\r\n                pendek, tidak kurus, dan tanpa gangguan perkembangan maka dia\r\n                tidak mengalami stunting.', NULL),
('Kementerian Kesehatan Rilis Hasil Survei Status Gizi Indonesia (SSGI) tahun 2024', 'Admin', 'Indonesia', '2022-04-10', 'Stunting merupakan satu kondisi di mana pertumbuhan dan\r\n                perkembangan anak terganggu, yang disebabkan karena kurangnya\r\n                gizi maupun infeksi kronis pada 1.000 hari pertama kehidupan.\r\n                Dokter Spesialis Anak Konsultan Endokrinologi Anak, Prof dr\r\n                Madarina Julia, MPH., Ph.D, Sp.A (K), menjelaskan bahwa stunting\r\n                erat kaitannya dengan asupan nutrisi yang buruk, infeksi\r\n                berulang, dan stimulasi psikososial yang tidak memadai. \"Anak\r\n                stunting tentu mempunyai riwayat gizi dan riwayat kesehatan yang\r\n                kurang baik. Selain itu, anak stunting juga sangat mungkin\r\n                mengalami gangguan perkembangan,\" ungkap Madarina dalam webinar\r\n                Pentingnya Pemantauan Tumbuh Kembang Terhadap Penegakkan Deteksi\r\n                Dini Stunting pada Anak Indonesia, Kamis (24/2/2022). Sehingga,\r\n                penting bagi orangtua untuk mendeteksi dini permasalahan\r\n                stunting pada anak, dengan memantau tinggi badan, berat badan,\r\n                lingkar kepala, serta dinilai perkembangannya. \"Kita harus\r\n                memantau pertumbuhan anak, apakah anak kita tumbuh dengan baik\r\n                dilihat dari tinggi badannya, apakah anak terlalu kurus atau\r\n                terlalu gemuk. Apakah dia berkembang sesuai dengan usianya,\"\r\n                kata Madarina. Lebih lanjut, dia berkata kecurigaan stunting\r\n                pada anak dapat dilihat dari kondisi tubuhnya. Misalnya, apabila\r\n                anak kurus, pendek, dan terjadi gangguan perkembangan\r\n                kemungkinan besar dia mengalami stunting. Sebaliknya, jika anak\r\n                pendek, tidak kurus, dan tanpa gangguan perkembangan maka dia\r\n                tidak mengalami stunting.', NULL);

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
('CTM0001', 'Totok Kurniawan', 'aktif', 'totokkurniawan710@gmail.com'),
('CTM0002', 'totok', 'aktif', 'totok@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `recipe`
--

CREATE TABLE `recipe` (
  `food_name` varchar(100) NOT NULL,
  `author` char(10) NOT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `kalori` int NOT NULL,
  `durasi` char(10) NOT NULL,
  `porsi` int NOT NULL,
  `usia` int NOT NULL,
  `foto` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `recipe`
--

INSERT INTO `recipe` (`food_name`, `author`, `description`, `kalori`, `durasi`, `porsi`, `usia`, `foto`) VALUES
('Bubur Kacang Hijau Susu', 'Admin', 'Bubur Kacang Hijau Susu', 120, '2 hari', 2, 19, NULL),
('Bubur Udang Tahu', 'Admin', 'Bubur Udang Tahu', 120, '2 hari', 2, 19, NULL),
('Pure Brokoli Kentang Keju', 'admin', 'Pure Brokoli Kentang Keju', 22, '3 hari', 2, 12, NULL),
('Salad Buah dan Sayur', 'admin', 'Salad Buah dan Sayur', 22, '3 hari', 2, 12, NULL),
('Sup Kentang Wortel', 'admin', 'Sup Kentang Wortel', 22, '3 hari', 2, 12, NULL);

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
(1, 'admin@gmail.com', 'A', 'admin', 'aktif'),
(3, 'kurniawan@gmail.com', '1', 'kurniawan', 'off'),
(8, 'totokkurniawan710@gmail.com', '123', 'Totok Kurniawan', 'aktif');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `artikel`
--
ALTER TABLE `artikel`
  ADD PRIMARY KEY (`judul`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id_customer`);

--
-- Indexes for table `recipe`
--
ALTER TABLE `recipe`
  ADD PRIMARY KEY (`food_name`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
