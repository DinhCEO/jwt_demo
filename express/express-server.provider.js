/**
 * Created by dinhceo on 27/03/2017.
 */
const express = require('express');
const Router = express.Router;
const cors = require('cors');

module.exports = function (container) {
    container.singleton('http.express', function*() {

        let app = express();
        let config = yield container.make('config');
        let route = yield container.make('http.router');
        //pass container request
        app.use(function (request, response, next) {
            request.container = container;
            next();
        });
        let middlewares = config.express.middlewares;
        middlewares.forEach(function (middleware) {
            app.use(middleware);
        });
        app.use(cors(config.express.cors));

        //source /api/....
        app.use('/api', route);

        return app;
    });

    container.singleton('http.router', function *() {
        let config = yield container.make('config');
        return new Router(config.express.router);
    });
};
