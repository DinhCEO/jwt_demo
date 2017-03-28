/**
 * Created by dinhceo on 28/03/2017.
 */
class DbCredentialsProvider {
    constructor(knex) {
        this.knex = knex;
    }

    *provide(username) {
        let credentials = yield this.knex.select().from('tbl_credentials').where('username', username);
        return credentials.length ? credentials[0] : null;
    }
}

module.exports = DbCredentialsProvider;