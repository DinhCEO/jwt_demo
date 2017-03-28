/**
 * Created by dinhceo on 28/03/2017.
 */
module.exports = function (container) {
    container.singleton('knex', function *() {
        let config = yield container.make('config');
        return require('knex')(config.knexfile);
    })
};