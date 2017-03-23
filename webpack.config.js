/**
 * Created by dinhceo on 23/03/2017.
 */
const path = require('path');

module.exports = {
    entry : './client/entry.js',
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname, 'dist')
    },
    module : {
        rules : {
            test : /\.(js)$/,
            use : 'babel-loader'
        }
    }
};