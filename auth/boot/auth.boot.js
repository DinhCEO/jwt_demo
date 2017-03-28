/**
 * Created by dinhceo on 28/03/2017.
 */
const w = require('co-express');
const CredentialValidator = require('./../http/credentical.middleware');
const AuthController = require('./../http/auth.controller');

module.exports = function (container) {

};
module.exports.boot = function*(container) {
    let router = yield container.make('http.router');

    router.post('/login', CredentialValidator, w(AuthController.login));
};
