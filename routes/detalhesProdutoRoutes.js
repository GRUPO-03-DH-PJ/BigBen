const express = require('express');
const router = express.Router();
const detalhesProdutoController = require('../controllers/detalhesProdutoController');


router.get('/', detalhesProdutoController.detalhesProduto);
router.get('/monitor', detalhesProdutoController.produtoMonitor);

module.exports = router;