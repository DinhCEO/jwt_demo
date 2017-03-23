const path = require('path');

const express = require('express');
const app = express();

//middleware file css,js
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(9000, function () {
    console.log('Example app listening on port 9000!');
});