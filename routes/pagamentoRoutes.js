const express = require('express');
const router = express.Router();
const PagamentoController = require('../controllers/PagamentoController');

router.post('/', PagamentoController.create);
router.get('/', PagamentoController.findAll);
router.get('/:id', PagamentoController.findOne);
router.put('/:id', PagamentoController.update);
router.delete('/:id', PagamentoController.delete);

module.exports = router;
