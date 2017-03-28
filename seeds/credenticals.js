let ROLE = require('./../constant/user-role');
let bootstrapt = require('./../bootstrap');
let co = require('co');

exports.seed = co.wrap(function *(knex) {
    let container = yield bootstrapt();
    let hasher = yield container.make('hasher');

    let hasherPassword = yield hasher.hash('test-password');

    yield knex('tbl_credentials').truncate();
    yield knex('tbl_credentials').insert([
        {
            username    : 'customer',
            user_id     : 1,
            password    : hasherPassword,
            role        : ROLE.CUSTOMER
        },
        {
            username    : 'admin',
            user_id     : 2,
            password    : hasherPassword,
            role        : ROLE.ADMIN
        }
    ]);
});
