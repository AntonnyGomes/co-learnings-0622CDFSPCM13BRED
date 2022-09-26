// importando o express
const express = require('express');

// importando meu controller
const postsController = require('../controllers/PostsController');

const fileUploadMiddleware = require('../middlewares/FileUploadMiddleware');

// criando um router
const router = express.Router();

// definindo rotas
router.get('/create', postsController.create);
router.post('/store', fileUploadMiddleware.single('image'), postsController.store);
router.get('/:slug', postsController.index);

module.exports = router;
