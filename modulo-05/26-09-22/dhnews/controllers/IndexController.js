const posts = require('../database/posts.json');

module.exports = {
    index: (req, res) => {
        const postsFormatados = posts.map((post) => {
            const dataDeCriacao = new Date(post.createdAt);
            const dataFormatada = new Intl.DateTimeFormat('pt-BR', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
            }).format(dataDeCriacao);
            // const postFormatado = {
            //     ...post,
            //     createdAt: dataFormatada,
            // };

            // return postFormatado;

            return {
                ...post,
                createdAt: dataFormatada,
            }
        });

        return res.render('index', { posts: postsFormatados });
    },
}
