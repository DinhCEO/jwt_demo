/**
 * Created by dinhceo on 27/03/2017.
 */
module.exports = function* (request, response, next) {
    let container = request.container;
    let authorizer = yield container.make('auth.authorizer');
    let token = (request.query.token || request.body.token || request.get("Authorization")).replace("Bearer ","");
    try {
        request.user = yield authorizer.check(token.trim());
    } catch(ex) {
        return response.status(401).json({
            code    : "E_AUTH",
            message : "Token mismatch"
        });
    }

    return next();
};