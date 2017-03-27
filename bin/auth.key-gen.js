/**
 * Created by dinhceo on 27/03/2017.
 */
const fs = require('fs');
const path = require('path');
const random = require('random-key');

let key = random.generate();

console.log(key);

const envFile = path.normalize(path.join(__dirname + './../.env'));

fs.readFile(envFile, function (err, content) {
    if (err) {
        console.warn("failed read file path = " + `${envFile}`);
        return;
    }

    fs.writeFile(
        envFile,
        content.toString().replace(/SERVER_AUTH_KEY=.*$/, `SERVER_AUTH_KEY=${key}`),
        'utf-8',
        function (err) {
            if (err) {
                console.error(`write to ${envFile} file failed`, err);
                process.exit(1);
            }
        }
    )
});

