// Update with your config settings.
require('dotenv').config();
module.exports = {
    client : 'mysql',
    connection : {
        host : process.env.NOKIOO_DB_HOST || 'your-host',
        user : process.env.NOKIOO_DB_USER || 'your-user',
        password : process.env.NOKIOO_DB_PASSWORD || 'secret',
        database : process.env.NOKIOO_DB_NAME || 'your-db-name'

    }
};
