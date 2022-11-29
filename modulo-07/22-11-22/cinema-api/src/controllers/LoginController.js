const { sign } = require('jsonwebtoken');

const HttpUnauthorizedError = require('../utils/HttpUnauthorizedError');

module.exports = {
    create: (req, res) => {
        const { email, password } = req.body;

        if (email !== 'mfelix@digitalhouse.com' || password !== '123456') {
            throw HttpUnauthorizedError();
        }

        const token = sign({
            data: req.body,
        }, 'secret', { expiresIn: '3h' });

        return res.json({
            token,
        });
    }
};