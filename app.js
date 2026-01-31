const express = require("express");
const { Pool } = require("pg");
const app = express();

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME;

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432,
});

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      message: "Node + PostgreSQL running inside Docker",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`${APP_NAME} running on Port ${PORT}`);
});
