const db = require("../data/db-config.js");

function addresource(resourceData) {
    return db("resource").insert(resourceData);
}

function findresources() {
    return db("resource");
}

function addproject(projectData) {
    return db("project").insert(projectData);
}

function findprojects() {
    return db("project");
}

function addtask(taskData) {
    return db("task").insert(taskData);
}

async function findtask() {
    const tasks = await db("task")
        .join("project", "task.project_id", "project_id")
        .select(
            "task.description",
            "task.notes",
            "project.name",
            "project.description"
        );
    // .on("project.id", "=", "task.project_id");
    return tasks;
}

module.exports = {
    addresource,
    findresources,
    addproject,
    findprojects,
    addtask,
    findtask,
};
