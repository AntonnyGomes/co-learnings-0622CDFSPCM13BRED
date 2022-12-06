const { expressjwt: jwt } = require('express-jwt');

const HttpUnauthorizedError = require('../utils/HttpUnauthorizedError');

const AuthenticationMiddleware = (req, res, next) => {
    if (!req.auth) throw HttpUnauthorizedError();
    next();
  }

module.exports = [
    jwt({ secret: "secret", algorithms: ["HS256"] }),
    AuthenticationMiddleware,
];
