/**
 * Created by dinhceo on 27/03/2017.
 */
const BCrypt = require('./bcrypt.service');
const coreBCrypt = require('bcrypt');

module.exports = function(container) {
    container.singleton('hasher', function* () {
        let config = yield container.make('config');
        return new BCrypt(coreBCrypt).setRounds(config.bcrypt.rounds);
    })
};