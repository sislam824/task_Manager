require("dotenv").config();
const express = require("express");
const taskRoutes = require("./routes/taskRoutes");
const pool = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
