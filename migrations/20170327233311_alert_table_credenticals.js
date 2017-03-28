exports.up = function (knex, Promise) {
    return knex.schema.alterTable('tbl_credentials', function (table) {
        table.string('password', 100);
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.alterTable('tbl_credentials', function (table) {
        table.dropColumn('password');
    });
};
