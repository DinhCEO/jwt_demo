/**
 * Created by dinhceo on 27/03/2017.
 */
require('dotenv').config();

module.exports = {
    providers : [
        require('./knex/knex.provider'),
        require('./bcrypt/bcrypt.provider'),
        require('./express/express-server.provider'),
        require('./auth/authorizer/authrozer.provider'),
        require('./auth/boot/auth.boot'),
        require('./auth/authenticator/authenticator.provider'),
        require('./jwt/jwt.provider'),
        //todo add provider
    ],
    app : {
        port : process.env['SERVER_HOST_PORT'],
        //host : process.env['SERVER_HOST_NAME']
    },
    bcrypt : {
        rounds : 10
    },
    knexfile : require('./knexfile'),

    auth : {
        key : process.env.SERVER_AUTH_KEY || 'secret'
    },
    express : {
        middlewares : [
            require('body-parser').json({
                extend : true
            })
        ],
        cors : {
            origin : "*"
        },
        router : {
            //todo router
        }
    }
};