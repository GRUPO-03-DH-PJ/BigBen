const express = require('express');
const router = express.Router();
const painelController = require('../controllers/painelController');

router.get('/', painelController.painelUsuario)

module.exports = router;