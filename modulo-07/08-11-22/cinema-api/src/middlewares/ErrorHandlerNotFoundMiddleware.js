const HttpNotFoundError = require('../utils/HttpNotFoundError');

module.exports = (req, res) => {
    const error = HttpNotFoundError(`No HTTP resource was found that matches the request URI: ${req.originalUrl}`);

    return res.status(error.code).json(error.errors);
}
