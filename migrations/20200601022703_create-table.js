exports.up = function (knex) {
    return knex.schema
        .createTable("project", (tbl) => {
            tbl.increments("id");
            tbl.string("project_name", 128).notNullable();
            tbl.string("project_description", 255);
            tbl.boolean("project_completed").notNullable().default(false);
        })
        .createTable("resource", (tbl) => {
            tbl.increments("id");
            tbl.string("resource_name", 128).notNullable().unique();
            tbl.string("resource_description", 255);
        })
        .createTable("task", (tbl) => {
            tbl.increments("id");
            tbl.string("task_description", 255).notNullable();
            tbl.integer("project_id")
                .notNullable()
                .unsigned()
                .references("project.id");
            tbl.string("task_notes", 255);
            tbl.boolean("task_completed").notNullable().default(false);
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("project")
        .dropTableIfExists("resource")
        .dropTableIfExists("task");
};
