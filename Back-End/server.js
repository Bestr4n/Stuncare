const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "stuncare",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to database.");
});

// BE login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Validasi data
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  // Query untuk memeriksa pengguna dengan username dan password tertentu
  const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    if (result.length === 0) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    // Jika pengguna ditemukan, kirim respons sukses
    res.status(200).json({ message: "Login successful", user: result[0] });
  });
});
// End BE login

// BE Dashboard
app.get("/totalPelanggan", (req, res) => {
  const sql = "SELECT COUNT(id_customer) AS totalCustomers FROM customer";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
});
app.get("/totalArticle", (req, res) => {
  const sql = "SELECT COUNT(judul) AS totalArtikel FROM artikel";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
});
app.get("/totalRecipe", (req, res) => {
  const sql = "SELECT COUNT(food_name) AS totalResep FROM recipe";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
});
// End BE Dashboard

// BE User
app.get("/user", (req, res) => {
  const sql = "SELECT * FROM user";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/user", (req, res) => {
  const { nama_lengkap, email, password, status } = req.body;
  const sql =
    "INSERT INTO user (nama_lengkap, email, password, status) VALUES (?, ?, ?, ?)";
  db.query(sql, [nama_lengkap, email, password, status], (err, result) => {
    if (err) {
      console.error(); // Log the error detail
      return res.status(500).json({ message: "Database error", error: err });
    }
    return res
      .status(201)
      .json({ message: "User added successfully", id: result.insertId });
  });
});

app.put("/user/:id", (req, res) => {
  const id = req.params.id;
  const { nama_lengkap, email, password, status } = req.body;

  // Validasi data
  if (!nama_lengkap || !email || !password || !status) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql =
    "UPDATE user SET nama_lengkap = ?, email = ?, password = ?, status = ? WHERE id_user = ?";
  db.query(sql, [nama_lengkap, email, password, status, id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User updated successfully" });
  });
});

app.delete("/user/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM user WHERE id_user = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User deleted successfully" });
  });
});
// End BE User

// BE Customer
app.get("/customer", (req, res) => {
  const sql = "SELECT * FROM customer";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.put("/customer/:id", (req, res) => {
  const id = req.params.id;
  const { nama, email, status } = req.body;

  // Validasi data
  if (!email || !nama || !status) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql =
    "UPDATE customer SET nama = ?, email = ?, status = ? WHERE id_customer = ?";
  db.query(sql, [nama, email, status, id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Error" });
    }
    return res.status(200).json({ message: "Update sukses" });
  });
});

app.delete("/customer/:id", (req, res) => {
  const id = req.params.id;

  const sql = "DELETE FROM customer WHERE id_customer = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Error" });
    }
    return res.status(200).json({ message: "Delete sukses" });
  });
});
// End BE Customer

// BE Report

// End BE Report

// BE artikel
app.get("/article", (req, res) => {
  const sql = "SELECT * FROM artikel";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/article", (req, res) => {
  const { judul, author, lokasi, tgl_penerbitan, deskripsi, foto } = req.body;
  const sql =
    "INSERT INTO artikel (judul, author, lokasi, tgl_penerbitan, deskripsi,foto) VALUES (?, ?, ?, ?, ?, ?)";

  db.query(
    sql,
    [judul, author, lokasi, tgl_penerbitan, deskripsi, foto],
    (err, result) => {
      if (err) {
        console.error("Database error:", err); // Log the error detail
        return res.status(500).json({ message: "Database error", error: err });
      }
      return res
        .status(201)
        .json({ message: "Artikel added successfully", id: result.insertId });
    }
  );
});

// app.put("/article/:id", (req, res) => {
//   const id = req.params.id;
//   const { judul, author, lokasi, tgl_penerbitan, deskripsi } = req.body;

//   if (!judul || !author || !lokasi || !tgl_penerbitan || !deskripsi) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   const sql =
//     "UPDATE artikel SET judul = ?, author = ?, lokasi = ?, tgl_penerbitan = ?, deskripsi = ? WHERE id = ?";
//   db.query(
//     sql,
//     [judul, author, lokasi, tgl_penerbitan, deskripsi, id],
//     (err, result) => {
//       if (err) {
//         return res.status(500).json({ message: "Database error", error: err });
//       }
//       if (result.affectedRows === 0) {
//         return res.status(404).json({ message: "Article not found" });
//       }
//       return res.status(200).json({ message: "Update sukses" });
//     }
//   );
// });

app.delete("/article/:id", (req, res) => {
  const id = req.params.id;

  const sql = "DELETE FROM artikel WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Article not found" });
    }
    return res.status(200).json({ message: "Delete sukses" });
  });
});

// End BE artikel

// BE recipe
app.get("/recipe", (req, res) => {
  const sql = "SELECT * FROM recipe";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/recipe", (req, res) => {
  const { food_name, author, description, kalori, durasi, porsi, usia, foto } =
    req.body;
  const sql =
    "INSERT INTO recipe (food_name, author, description, kalori, durasi, porsi, usia, foto) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

  db.query(
    sql,
    [food_name, author, description, kalori, durasi, porsi, usia, foto],
    (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ message: "Database error", error: err });
      }
      return res
        .status(201)
        .json({ message: "Recipe added successfully", id: result.insertId });
    }
  );
});

// app.put("/recipe/:id", (req, res) => {
//   const id = req.params.id;
//   const { food_name, author, description, kalori, durasi, porsi, usia } =
//     req.body;

//   // Validasi data
//   if (
//     !food_name ||
//     !author ||
//     !description ||
//     !kalori ||
//     !durasi ||
//     !porsi ||
//     !usia
//   ) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   const sql =
//     "UPDATE recipe SET food_name = ?, author = ?, kalori = ?, durasi = ?, description = ?, porsi = ?, usia = ? WHERE food_name = ?";
//   db.query(
//     sql,
//     [judul, author, lokasi, tgl_penerbitan, deskripsi, id],
//     (err, result) => {
//       if (err) {
//         return res.status(500).json({ message: "Database error", error: err });
//       }
//       if (result.affectedRows === 0) {
//         return res.status(404).json({ message: "Error" });
//       }
//       return res.status(200).json({ message: "Update sukses" });
//     }
//   );
// });

app.delete("/recipe/:id", (req, res) => {
  const id = req.params.id;

  const sql = "DELETE FROM recipe WHERE id_recipe = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Error" });
    }
    return res.status(200).json({ message: "Delete sukses" });
  });
});

// End BE recipe

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});
