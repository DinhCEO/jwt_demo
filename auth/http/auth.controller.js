/**
 * Created by dinhceo on 27/03/2017.
 */
const AuthenticateError = require('./../error/Authenticate.error');

module.exports.login = function *(request, response) {
    let container = request.container;

    let authenticator = yield container.make('auth.authenticator');
    let authorizer = yield container.make('auth.authorizer');
    let foundUser;
    try {
        foundUser = yield authenticator.login(request.credential.username, request.credential.password);
    } catch (ex) {
        if (ex instanceof AuthenticateError) {
            return response.status(403).json({
                code : 'ERROR',
                message : ex.message
            });
        }
        throw ex;
    }

    let signature = yield authorizer.sign(foundUser);

    return response.json({
        code : 'SUCCESS',
        token : signature,
        role : foundUser.prop.role,
        user_id : foundUser.prop['user_id'],
        username : foundUser.prop.username
    });
};