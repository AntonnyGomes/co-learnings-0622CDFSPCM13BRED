const express = require('express');

const loginController = require('../controllers/LoginController');
const authenticationValidator = require('../middlewares/validators/AuthenticationValidator');

const router = express.Router();

router.get('/login', loginController.login);
router.post('/login', authenticationValidator, loginController.realizarLogin);

module.exports = router;
