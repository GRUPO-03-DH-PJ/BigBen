const express = require('express');
const router = express.Router(); <<
<< << < HEAD
const categoriasController = require('../controllers/categoriasController'); ===
=== =
const categoriasController = require('../controllers/categoriasController'); >>>
>>> > ebb132ecf6dde931c7383589b656d811ddb1f5f0

router.post('/', categoriasController.create);
router.get('/', categoriasController.findAll);
router.get('/:id', categoriasController.findOne);
router.put('/:id', categoriasController.update);
router.delete('/:id', categoriasController.delete);

module.exports = router;