const express = require('express');
const router = express.Router();
const detalhesProdutoController = require('../controllers/detalhesProdutoController');


router.get('/:id', detalhesProdutoController.detalhesProduto);


module.exports = router;
