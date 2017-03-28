/**
 * Created by dinhceo on 28/03/2017.
 */
const Credentials = require('./../credential/credential');
class Authorizer {

    constructor(JwtService) {
        this.jwtService = JwtService;
    }

    setPrivatekey(privateKey) {
        this.privateKey = privateKey;
        return this;
    }

    sign(credential) {
        return this.jwtService.encode(this.privateKey, credential.serialize());
    }

    check(token) {
        return this.jwtService.decode(this.privateKey, token).then(Credentials.deserialize);
    }

}

module.exports = Authorizer;