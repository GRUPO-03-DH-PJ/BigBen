const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.get('/', produtoController.findAll);
router.get('/:id', produtoController.findOne);
router.post('/', produtoController.create);
router.put('/:id', produtoController.update);
router.delete('/:id', produtoController.delete);

module.exports = router;