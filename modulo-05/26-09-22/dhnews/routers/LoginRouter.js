const express = require('express');

const loginController = require('../controllers/LoginController');

const router = express.Router();

router.get('/login', loginController.login);
router.post('/login', loginController.realizarLogin);

module.exports = router;
