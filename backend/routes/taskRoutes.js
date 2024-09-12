const express = require("express");
const Task = require("../models/Task");
const router = express.Router();
// const app = express()

// Create a task - API
router.post("/tasks", async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get all the Tasks - API
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get a specific Task - API
router.get("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not Found" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Update a Task - API

router.put("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!task) {
      return res.status(404).json({ message: "Task not Found" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Delete a task - API
router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not Found" });
    }
    res.status(200).json({ message: "Task Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
