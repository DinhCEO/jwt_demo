/**
 * Created by dinhceo on 27/03/2017.
 */
require('dotenv').config();

module.exports = {
    providers : [
        require('./bcrypt/bcrypt.provider'),
        require('./express/express-server.provider'),
        //todo add provider
    ],
    app : {
        port : process.env['SERVER_HOST_PORT'],
        //host : process.env['SERVER_HOST_NAME']
    },
    bcrypt : {
        rounds : 10
    },
    knex : require('knex'),

    auth : {
        key : process.env.SERVER_AUTH_KEY || 'secret'
    },
    express : {
        middlewares : [
            require('body-parser').json({
                extend : true
            }),
        ],
        cors : {
            origin : "*"
        }
    }
};