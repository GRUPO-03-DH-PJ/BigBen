const express = require('express');
const router = express.Router();
const detalhesProdutoController = require('../controllers/detalhesProdutoController');


router.get('/', detalhesProdutoController.detalhesProduto);
router.get('/monitor', detalhesProdutoController.produtoMonitor);
router.get('/notbook', detalhesProdutoController.produtoNotbook);
router.get('/mause', detalhesProdutoController.produtoMause);
router.get('/switch', detalhesProdutoController.produtoSwitch);

module.exports = router;
