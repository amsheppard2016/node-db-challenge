exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("resource")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("resource").insert([
                {
                    resource_name: "resource1",
                    resource_description: "resourse description1",
                },
                {
                    resource_name: "resource2",
                    resource_description: "resourse description2",
                },
                {
                    resource_name: "resource3",
                    resource_description: "resourse description3",
                },
                {
                    resource_name: "resource4",
                    resource_description: "resourse description4",
                },
            ]);
        });
};
