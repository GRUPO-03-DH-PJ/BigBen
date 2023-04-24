const express = require('express');
const router = express.Router();
const carrinhoController = require('../controllers/carrinhoController');

router.get('/', carrinhoController.findAll);
router.get('/:id', carrinhoController.findOne);
router.post('/', carrinhoController.create);
router.put('/:id', carrinhoController.update);
router.delete('/:id', carrinhoController.delete);
router.get('/cliente/:id', carrinhoController.carrinho);

module.exports = router;
