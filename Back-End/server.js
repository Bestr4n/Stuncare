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

app.get("/user", (req, res) => {
  const sql = "SELECT * FROM user";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/user", (req, res) => {
  const { name, email, role, status } = req.body;
  const sql =
    "INSERT INTO user (email, password, nama_lengkap, status) VALUES (?, ?, ?, ?)";
  db.query(sql, [email, password, nama_lengkap, status], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    db.query("SELECT * FROM user", (err, data) => {
      if (err) {
        return res.status(500).json({ message: "Database error", error: err });
      }
      return res.status(200).json(data);
    });
  });
});

app.get("/customer", (req, res) => {
  const sql = "SELECT * FROM customer";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM user WHERE email = ? AND password = ?";
  const values = [email, password];

  db.query(sql, values, (err, data) => {
    if (err) return res.json("Error");
    if (data.length > 0) {
      return res.json("Login Sukses");
    } else {
      return res.json("Invalid email or password");
    }
  });
});
app.listen(8081, () => {
  console.log("Server is running on port 8081");
});
