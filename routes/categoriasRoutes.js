const express = require('express');
const router = express.Router();
const categoriasController = require('../controllers/categoriasController');


router.get('/', categoriasController.categorias);

module.exports = router;