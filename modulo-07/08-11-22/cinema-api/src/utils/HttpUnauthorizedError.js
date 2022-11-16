const HttpError = require('./HttpError');

module.exports = (message = `You don't have permission to access the specified resource.`, cause = null) => {
    const error = HttpError(message, cause);
    error.code = 401;
    error.errors.push({
        field: null,
        message
    });

    return error;
}
