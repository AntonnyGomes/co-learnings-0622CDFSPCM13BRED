// importando o express
const express = require('express');

// importando meu controller
const indexController = require('../controllers/IndexController')

// criando um router
const router = express.Router();

// definindo rotas
router.get('/', indexController.index);

module.exports = router;
