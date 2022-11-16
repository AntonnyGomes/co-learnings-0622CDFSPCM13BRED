const HttpUnauthorizedError = require('../utils/HttpUnauthorizedError');

module.exports = (err, req, res, next) => {
    if (err.name === 'UnauthorizedError') throw HttpUnauthorizedError(err.inner.message);
    next();
}
