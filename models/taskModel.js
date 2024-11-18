const pool = require("../config/db");

const getAllTasks = async () => {
  const result = await pool.query("SELECT * FROM tasks");
  return result.rows;
};

const createTask = async (task) => {
  const { title, description, status } = task;
  const result = await pool.query(
    "INSERT INTO tasks (title, description, status) VALUES ($1, $2, $3) RETURNING *",
    [title, description, status || "pending"]
  );
  console.log("d");
  return result.rows[0];
};

const updateTask = async (id, task) => {
  const { title, description, status } = task;
  const result = await pool.query(
    "UPDATE tasks SET title = $1, description = $2, status = $3 WHERE id = $4 RETURNING *",
    [title, description, status, id]
  );
  return result.rows[0];
};

const deleteTask = async (id) => {
  await pool.query("DELETE FROM tasks WHERE id = $1", [id]);
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};
