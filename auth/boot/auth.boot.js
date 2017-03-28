/**
 * Created by dinhceo on 28/03/2017.
 */
const w = require('co-express');
const CredentialValidator = require('./../http/credentical.middleware');
const AuthController = require('./../http/auth.controller');

const LoginRequire = require('./../../http/login-require.middleware');

module.exports = function (container) {

};
module.exports.boot = function*(container) {
    let router = yield container.make('http.router');

    router.post('/login', CredentialValidator, w(AuthController.login));
    router.post('/test', w(LoginRequire), function (req, res) {
        res.json({result : req.user.prop});
    });
};
