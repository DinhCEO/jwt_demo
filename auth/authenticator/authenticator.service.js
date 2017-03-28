/**
 * Created by dinhceo on 28/03/2017.
 */
const AuthenticateError = require('./../error/Authenticate.error');
const Credential = require('./../credential/credential');

class AuthenticatorService {
    constructor(hasher, credentialProvider) {
        this.hasher = hasher;
        this.crendentialProvider = credentialProvider;
    }

    *login(username, password) {
        let foundCredential = yield this.crendentialProvider.provide(username);
        if (!foundCredential) {
            throw new AuthenticateError('E_AUTH: User does not existed');
        }
        let foundPassword = yield this.hasher.compare(password, foundCredential.password);
        if (!foundPassword) {
            throw new AuthenticateError('E_AUTH: Password mismatch');
        }
        return new Credential({
            username    : foundCredential.username,
            user_id     : foundCredential['user_id'],
            role        : foundCredential.role
        }, new Date());
    }
}

module.exports = AuthenticatorService;