/**
 * Created by dinhceo on 27/03/2017.
 */
const cors = require('cors');

module.exports = function (container) {
    container.singleton('jwt-app.http.kernel', function*() {
        let config = yield container.make('config');

        let app = require('express')();
        app.use(cors());
        app.post('/api/login', function (req, res) {
            res.json({name : "dinhceo"});
        });

        let middlewares = config.express.middlewares;
        middlewares.forEach(function (middleware) {
            app.use(middleware);
        });

        return app;
    });
};
