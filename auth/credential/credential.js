/**
 * Created by dinhceo on 28/03/2017.
 */
class Credential {
    constructor(prop, loginAt) {
        this.prop = prop;
        this.prop['login_at'] = loginAt;
    }

    serialize() {
        return this.prop;
    }

    static deserialize(payload) {
        return new Credential(payload, payload['login_at']);
    }
}

module.exports = Credential;