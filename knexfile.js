// Update with your config settings.
require('dotenv').config();
module.exports = {
    client : process.env.JWT_DEMO_DB_TYPE || 'db-your-type',
    connection : {
        host : process.env.JWT_DEMO_DB_HOST || 'your-host',
        user : process.env.JWT_DEMO_DB_USER || 'your-user',
        password : process.env.JWT_DEMO_DB_PASSWORD || 'secret',
        database : process.env.JWT_DEMO_DB_NAME || 'your-database-provider-name'

    }
};
