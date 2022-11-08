module.exports = (message = '', cause = null) => {
    const error = Error(message, { cause });
    error.code = 500;
    error.errors = [];

    return error;
}
