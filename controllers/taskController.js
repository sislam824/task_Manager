const taskModel = require("../models/taskModel");

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await taskModel.getAllTasks();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Error fetching tasks" });
  }
};

exports.createTask = async (req, res) => {
  try {
    const newTask = await taskModel.createTask(req.body);
    res.status(201).json(newTask);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error creating task" });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const updatedTask = await taskModel.updateTask(req.params.id, req.body);
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: "Error updating task" });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await taskModel.deleteTask(req.params.id);
    res.status(200).json({ message: `task deleted with id:${req.params.id}` });
  } catch (err) {
    res.status(500).json({ error: "Error deleting task" });
  }
};
