/**
 * Created by dinhceo on 28/03/2017.
 */
const DbCredentialProvider = require('./../credential/database-provider/db-credential.provider');
const Authenticator = require('./authenticator.service');

module.exports = function (container) {
    container.singleton('auth.authenticator', function *() {
        let knex                    = yield container.make('knex');
        let dbCredentialProvider    = new DbCredentialProvider(knex);
        let hasher                  = yield container.make('hasher');

        return new Authenticator(hasher, dbCredentialProvider);
    })
};