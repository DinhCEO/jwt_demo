/**
 * Created by dinhceo on 27/03/2017.
 */
class BCrypt {
    constructor(bcrypt) {
        this.bcrypt = bcrypt;
    }

    setRounds(rounds) {
        this.rounds = rounds;
        return this;
    }

    hash(source) {
        return this.bcrypt.hash(source, this.rounds);
    }

    compare(source, hashed) {
        return this.bcrypt.compare(source, hashed);
    }
}

module.exports = BCrypt;