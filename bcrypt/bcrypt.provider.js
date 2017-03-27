/**
 * Created by dinhceo on 27/03/2017.
 */
const BCrypt = require('./bcrypt.service');
const coreBCrypt = require('bcrypt');

module.exports = function (container) {
    container.singleton('hasher', function () {
        let config = container.make('config');
        return new BCrypt().setRounds(config.bcrypt.rounds);
    })
};