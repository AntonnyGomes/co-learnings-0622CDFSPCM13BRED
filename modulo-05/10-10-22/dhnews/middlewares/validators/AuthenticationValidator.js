const { body } = require('express-validator');

module.exports = [
    body('email')
    .notEmpty()
    .bail()
    .withMessage('O campo email é obrigatório.')
    .isEmail()
    .withMessage('Digite um endereço de email válido.'),

    body('password')
    .notEmpty()
    .bail()
    .withMessage('O campo senha é obrigatório.')
    .isLength({ min: 6 })
    .withMessage('O campo senha deve conter no minimo 6 caracteres.')
];
