const express = require('express');

const cadastroController = require('../controllers/CadastroController');

const router = express.Router();

router.get('/cadastro', cadastroController.cadastro);
router.post('/cadastro', cadastroController.realizarCadastro);

module.exports = router;
