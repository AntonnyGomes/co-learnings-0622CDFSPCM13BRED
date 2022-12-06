const HttpError = require('./HttpError');

module.exports = (message = 'No HTTP resource was found that matches the request URI.', cause = null) => {
    const error = HttpError(message, cause);
    error.code = 404;
    error.errors.push({
        field: null,
        message
    });

    return error;
}
