// importando o express
const express = require('express');

// importando meu controller
const postsController = require('../controllers/PostsController')

// criando um router
const router = express.Router();

// definindo rotas
router.get('/create', postsController.create);
router.get('/store', postsController.store);
router.get('/:id', postsController.index);

module.exports = router;
