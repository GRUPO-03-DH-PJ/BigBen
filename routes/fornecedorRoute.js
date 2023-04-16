const express = require('express');
const router = express.Router();
const fornecedorController = require('../controllers/fornecedorController');

router.get('/', fornecedorController.findAll);
router.get('/:id', fornecedorController.findOne);
router.post('/', fornecedorController.create);
router.put('/:id', fornecedorController.update);
router.delete('/:id', fornecedorController.delete);

module.exports = router;