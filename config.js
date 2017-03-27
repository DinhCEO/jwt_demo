/**
 * Created by dinhceo on 27/03/2017.
 */
require('dotenv').config();

module.exports = {
    app : {
        port : process.env['SERVER_HOST_PORT'],
        //host : process.env['SERVER_HOST_NAME']
    }
};