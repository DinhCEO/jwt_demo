/**
 * Created by dinhceo on 27/03/2017.
 */
module.exports = function (request, response, next) {
    if (!request.body.username) {
        return response.status(400).json({
            code    : 'E_INVALID',
            message : 'Username is required'
        })
    }

    if (!request.body.password) {
        return response.status(400).json({
            code    : 'E_INVALID',
            message : 'Password is required'
        })
    }
    request.credential = {
        username : request.body.username,
        password : request.body.password
    };


    next();
};