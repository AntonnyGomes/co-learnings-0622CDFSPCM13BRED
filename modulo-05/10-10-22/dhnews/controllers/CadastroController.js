const fs = require('fs');
const path = require('path');

const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const users = require('../database/users.json');

module.exports = {
    cadastro: (req, res) => {
        return res.render('cadastro');
    },
    realizarCadastro: (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            req.flash('errors', errors.mapped());
            req.flash('body', req.body);

            return res.redirect('/cadastro');
        }

        const { email, password } = req.body;
        const usuarioCadastrado = users.find((user) => user.email === email);
        
        if (usuarioCadastrado) {
            req.flash('alert', {
                type: 'success',
                message: 'Você ja possue um cadastro, realize seu login.'
            });

            return res.redirect('/login');
        }

        const id = Date.now();
        let salts = 10;
        const usuario = {
            id,
            email,
            password: bcrypt.hashSync(password, salts),
        };
        users.push(usuario);
        const caminho = path.resolve('./database/users.json');
        fs.writeFileSync(caminho, JSON.stringify(users, null, 4));

        req.session.usuario = usuario

        return res.redirect('/posts/create');
    },
}
