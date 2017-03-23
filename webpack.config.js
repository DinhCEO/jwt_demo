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
    module: {
        loaders: [
            { test: path.join(__dirname, 'client/app'), loader: "babel-loader" }
        ]
    }
};