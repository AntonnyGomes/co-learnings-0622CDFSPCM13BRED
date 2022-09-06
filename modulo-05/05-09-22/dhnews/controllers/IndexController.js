const posts = require('../database/posts.json');

module.exports = {
    index: (req, res) => {
        return res.render('index', { posts });
    }
}
