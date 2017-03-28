/**
 * Created by dinhceo on 28/03/2017.
 */
const Authorizer = require('./authorizer.service');
module.exports = function (container) {
    container.singleton('auth.authorizer', function *() {
        let jwtService = yield container.make('jwt');
        let config = yield container.make('config');

        return new Authorizer(jwtService).setPrivatekey(config.auth.key);
    })
};
