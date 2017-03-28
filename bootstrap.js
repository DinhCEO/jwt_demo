/**
 * Created by dinhceo on 27/03/2017.
 */
const lodash = require('lodash');

const Container = require('sphinx-container');
const config = require('./config');

let container = new Container();
module.exports = function *() {
    container.singleton('config', function *() {
        return config;
    });
    let bootProviders = [];
    config.providers.forEach(function (provider) {
        provider(container);
        if (lodash.isFunction(provider.boot)) {
            bootProviders.push(provider);
        }
    });
    for (let index = 0; index < bootProviders.length; index++) {
        yield bootProviders[index].boot(container);
    }

    return container;
};