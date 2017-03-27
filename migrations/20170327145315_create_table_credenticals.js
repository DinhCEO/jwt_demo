exports.up = function(knex, Promise) {
    return knex.schema.createTable('tbl_credentials', function (table) {
        table.increments();
        table.string('token');
        table.string('user_id');
        table.string('role');
        table.string('username');
        table.timestamps('created_at');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('tbl_credentials')
};
