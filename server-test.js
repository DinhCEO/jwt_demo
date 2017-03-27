const path = require('path');

const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const config = require('./config');

const CredentialValidator = require('./auth/http/credentical.middleware');
const AuthController = require('./auth/http/auth.controller');

//middleware file css,js
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.use(bodyParser.json());
// app.post('/api/login', CredentialValidator, function (req, res) {
//     console.log(req.body);
//     res.json({code : 'Success', result : req.body});
// });

app.post('/api/login', CredentialValidator, AuthController.login);

app.listen(config.app.port, function () {
    console.log(`Example app listening on port ${config.app.port}`);
});