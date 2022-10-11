const express = require('express');

const cadastroController = require('../controllers/CadastroController');
const authenticationValidator = require('../middlewares/validators/AuthenticationValidator');

const router = express.Router();

router.get('/cadastro', cadastroController.cadastro);
router.post('/cadastro', authenticationValidator, cadastroController.realizarCadastro);

module.exports = router;
