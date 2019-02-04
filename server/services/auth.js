


// MIDDLEWARE
exports.checkJWT = function(req, res, next) {
    const isValidTokes = true;

    if (isValidTokes) {
        next();
    } else {
        return res.status(401).send({title: 'Not Authorized', detail: 'Please login in order to get a data'});
    }

}