exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("project")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("project").insert([
                {
                    project_name: "project1",
                    project_description: "project description1",
                    project_completed: false,
                },
                {
                    project_name: "project2",
                    project_description: "project description2",
                    project_completed: false,
                },
                {
                    project_name: "project3",
                    project_description: "project description3",
                    project_completed: false,
                },
                {
                    project_name: "project4",
                    project_description: "project description4",
                    project_completed: false,
                },
            ]);
        });
};
