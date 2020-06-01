exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("task")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("task").insert([
                {
                    task_description: "task description1",
                    project_id: 1,
                    task_notes: "task notes1",
                    task_completed: false,
                },
                {
                    task_description: "task description2",
                    task_notes: "task notes2",
                    project_id: 2,
                    task_completed: false,
                },
                {
                    task_description: "task description3",
                    project_id: 3,
                    task_notes: "task notes3",
                    task_completed: false,
                },
                {
                    task_description: "task description4",
                    project_id: 4,
                    task_notes: "task notes4",
                    task_completed: false,
                },
            ]);
        });
};
