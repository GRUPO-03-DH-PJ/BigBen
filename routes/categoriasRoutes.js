const express = require('express');
const router = express.Router();
const categoriasController = require('../controller/categoriasController');


router.get('/', categoriasController.categorias);

module.exports = router;