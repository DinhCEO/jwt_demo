/**
 * Created by dinhceo on 27/03/2017.
 */
const Container = require('sphinx-container');
const config = require('./config');

let container = new Container();
module.exports = function *() {
    container.singleton('config', function *() {
        return config;
    });
    config.providers.forEach(function (provider) {
        provider(container);
    });

    return container;
};