/**
 * Created by dinhceo on 27/03/2017.
 */
const Promise = require('bluebird');

class JWTService {
    constructor(jwt) {
        this.jwt = jwt;
    }

    encode(secret, payload) {
        return Promise.promisify(this.jwt.encode, {
            context : this.jwt
        })(secret, payload);
    }

    decode(secret, payload) {
        return Promise.promisify(this.jwt.decode, {
            context : this.jwt
        })(secret, payload);
    }
}
module.exports = JWTService;