const fs = require('fs');
const path = require('path');

const readingTime = require('reading-time');
const slug = require('slug');

const posts = require('../database/posts.json');

module.exports = {
    index: (req, res) => {
        const { slug: urlSlug } = req.params;
        
        // Identificando se o usuario acessou a pagina de um post antigo
        // Se o post é antigo, crio um slug e uma nova data ao mesmo
        if (Number.isInteger(Number(urlSlug))) {
            const postId = Number(urlSlug);
            const post = posts.find((post) => post.id === postId);
            const postSlug = slug(`${postId}-${post.title}`);
            const createdAt = new Date().toISOString();
            post.slug = postSlug;
            post.createdAt = createdAt;

            const caminho = path.resolve('./database/posts.json');
            fs.writeFileSync(caminho, JSON.stringify(posts, null, 4));

            return res.render('posts/index', { post });
        }
        
        const post = posts.find((post) => post.slug === urlSlug);
        const dataDeCriacao = new Date(post.createdAt);
        const dataFormatada = new Intl.DateTimeFormat('pt-BR', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
        }).format(dataDeCriacao);
        const postFormatado = {
            ...post,
            createdAt: dataFormatada,
        };

        return res.render('posts/index', { post: postFormatado });
    },
    create: (req, res) => {
        return res.render('posts/create');
    },
    store: (req, res) => {
        const { title, subject, content } = req.body;
        const id = Date.now();
        const createdAt = new Date().toISOString();
        const postReadingTime = readingTime(content).minutes < 1 ? 1 : readingTime(content).minutes;
        const postSlug = slug(`${id}-${title}`);
        const image = req.file.path.replace('public', '');
        const post = {
            id,
            title,
            subject,
            content,
            createdAt,
            readingTime: postReadingTime,
            slug: postSlug,
            image,
            author: {
                name: "Digital House",
                avatar: "https://www.digitalhouse.com/br/blog/content/images/size/w100/2022/03/DH_Redes_Sociais_Templates_Avatar_06.png"
            }
        };
        posts.push(post);
        const caminho = path.resolve('./database/posts.json');
        fs.writeFileSync(caminho, JSON.stringify(posts, null, 4));

        return res.redirect('/');
    }
};
