// importando o express
const express = require('express');

// importando meu controller
const logoutController = require('../controllers/LogoutController')
const authorizeAccessMiddleware = require('../middlewares/AuthorizeAccessMiddleware');

// criando um router
const router = express.Router();

// definindo rotas
router.get('/logout', authorizeAccessMiddleware, logoutController.logout);

module.exports = router;
