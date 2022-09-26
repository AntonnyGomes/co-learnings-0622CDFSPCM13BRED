const posts = require('../database/posts.json');

module.exports = {
    index: (req, res) => {
        const postsVisualizados = posts.map((post) => {
            return {
                ...post,
                createdAt: new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(post.createdAt))
            }
        })

        return res.render('index', { posts: postsVisualizados });
    }
}
