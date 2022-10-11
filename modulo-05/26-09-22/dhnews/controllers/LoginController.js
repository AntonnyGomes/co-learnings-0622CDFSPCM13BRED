const bcrypt = require('bcrypt');

const users = require('../database/users.json');

module.exports = {
    login: (req, res) => {
        return res.render('login');
    },
    realizarLogin: (req, res) => {
        const { email, password } = req.body;
        const usuarioCadastrado = users.find((user) => user.email === email);

        if (!usuarioCadastrado) return res.status(400).send({ message: "Usuário ou senha inválidos." });

        const asSenhasConferem = bcrypt.compareSync(password, usuarioCadastrado.password);

        if (!asSenhasConferem) return res.status(400).send({ message: "Usuário ou senha inválidos." });

        req.session.usuario = usuarioCadastrado;

        return res.redirect('/posts/create');
    }
}