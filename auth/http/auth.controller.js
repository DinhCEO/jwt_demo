/**
 * Created by dinhceo on 27/03/2017.
 */
const jwtService = require('json-web-token');
module.exports.login = function (request, response) {

    let signature = jwtService.encode("private-key", request.body);

    return response.json({
        code        : 'SUCCESS',
        token       : signature,
        username    : request.body['username']
    });
};