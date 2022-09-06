const posts = require('../database/posts.json');

module.exports = {
    index: (req, res) => {
        const { id } = req.params;
        const idConvertido = Number(id);
        const post = posts.find((post) => post.id === idConvertido);

        return res.render('posts/index', { post });
    },
    create: (req, res) => {
        return res.render('posts/create');
    }
};
