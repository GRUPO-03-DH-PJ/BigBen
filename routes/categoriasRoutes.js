const express = require('express');
const router = express.Router();
const categoriasController = require('../controllers/categoriasController');

router.post('/', categoriasController.create);
// router.get('/', categoriasController.findAll);
router.get('/:id', categoriasController.findOne);
router.put('/:id', categoriasController.update);
router.delete('/:id', categoriasController.delete);
router.get('/', categoriasController.categorias);


module.exports = router;
