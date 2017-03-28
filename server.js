/**
 * Created by dinhceo on 27/03/2017.
 */
const co = require('co');
const Bootstrap = require('./bootstrap');


co.wrap(function *() {
    let container = yield Bootstrap();

    let kernel = yield container.make('http.express');
    let config = yield container.make('config');


    kernel.listen(config.app.port, function () {
        console.log(`app listening port ${config.app.port}`);
    });


})().catch(console.error);