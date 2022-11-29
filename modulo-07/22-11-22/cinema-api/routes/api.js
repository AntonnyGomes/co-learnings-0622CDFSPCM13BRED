const { Router } = require('express');
const { default: RouteGroup } = require('express-route-grouping');

const MoviesController = require('../src/controllers/MoviesController');
const LoginController = require('../src/controllers/LoginController');
const AuthenticationMiddleware = require('../src/middlewares/AuthenticationMiddleware');

// Criando um objeto de rotas
const router = new RouteGroup('/', Router());

// Agrupando rotas da api pela versao numero 1
router.group('v1', ({ group }) => {
    group('login', ({ resource }) => {
        resource({
            handlers: LoginController,
        });
    });

    // Criando um grupo de rotas chamada /movies dentro do grupo v1
    // Exemplo: /v1/movies
    group('movies', ({ resource }) => {
        resource({
            beforeHandlers: [...AuthenticationMiddleware],
            handlers: MoviesController,
        });
    });
});

module.exports = router.export;
