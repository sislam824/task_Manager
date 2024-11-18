require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Tasks",
  password: "Saifi2323#",
  port: 5432,
});

pool
  .connect()
  .then(() => console.log("PostgreSQL Connected"))
  .catch((err) => console.error("Error connecting to PostgreSQL:", err));

module.exports = pool;
