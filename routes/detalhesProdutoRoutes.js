const express = require('express');
const router = express.Router();
const detalhesProdutoController = require('../controllers/detalhesProdutoController');


router.get('/', detalhesProdutoController.detalhesProduto);

module.exports = router;