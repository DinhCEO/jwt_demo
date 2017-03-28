/**
 * Created by dinhceo on 28/03/2017.
 */
const jwt = require('json-web-token');
const JwtService = require("./jwt.service");

module.exports = function (container) {
    container.singleton('jwt', function *() {
        return new JwtService(jwt);
    })
};