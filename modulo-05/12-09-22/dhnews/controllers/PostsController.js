const fs = require('fs');
const path = require('path');

const readingTime = require('reading-time');
const slug = require('slug');

const posts = require('../database/posts.json');

module.exports = {
    index: (req, res) => {
        const { slug: urlSlug } = req.params;
        
        if (Number.isInteger(Number(urlSlug))) {
            const id = Date.now();
            const postId = Number(urlSlug);
            const post = posts.find((post) => post.id === postId);
            const postSlug = slug(`${id}-${post.title}`);
            const createdAt = new Date().toISOString();
            post.createdAt = createdAt;
            post.slug = postSlug;

            const caminho = path.resolve('./database/posts.json');
            fs.writeFileSync(caminho, JSON.stringify(posts, null, 4));

            const postVisualizado = {
                ...post,
                createdAt: new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(post.createdAt))
            }

            return res.render('posts/index', { post: postVisualizado });
        }

        const post = posts.find((post) => post.slug === urlSlug);
        const postVisualizado = {
            ...post,
            createdAt: new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(post.createdAt))
        }

        return res.render('posts/index', { post: postVisualizado });
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
