const express = require('express');
const router = express.Router();
const PagamentoController = require('../controllers/PagamentoController');

router.post('/pagamentos', PagamentoController.create);
router.get('/pagamentos', PagamentoController.findAll);
router.get('/pagamentos/:id', PagamentoController.findOne);
router.put('/pagamentos/:id', PagamentoController.update);
router.delete('/pagamentos/:id', PagamentoController.delete);

module.exports = router;