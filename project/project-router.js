const express = require("express");

const Project = require("./project-model.js");

const router = express.Router();

router.post("/resources", (req, res) => {
    const resourceData = req.body;

    Project.addresource(resourceData)
        .then((resource) => {
            res.status(201).json(resource);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to create new resource" });
        });
});

router.get("/resources", (req, res) => {
    Project.findresources()
        .then((resources) => {
            res.json(resources);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to get resources" });
        });
});

router.post("/", (req, res) => {
    const projectData = req.body;

    Project.addproject(projectData)
        .then((project) => {
            res.status(201).json(project);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to create new project" });
        });
});

router.get("/", (req, res) => {
    Project.findprojects()
        .then((projects) => {
            res.json(projects);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to get projects" });
        });
});

router.post("/task", (req, res) => {
    const taskData = req.body;

    Project.addtask(taskData)
        .then((task) => {
            res.status(201).json(task);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to create new task" });
        });
});

router.get("/task", (req, res) => {
    Project.findtask()
        .then((tasks) => {
            res.json(tasks);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to get tasks" });
        });
});

module.exports = router;
