const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const {
  check
} = require('express-validator');

const storage = multer.diskStorage({
  destination: (req, file, calback) => {
    calback(null, './public/image/avatars');
  },
  fileName: (req, file, calback) => {
    let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
    calback(null, fileName);
  },
});

const uploadFile = multer({
  storage
});

const userController = require('../controllers/userController');
// validações de seus inputs
const validations = [
  check('nome').notEmpty()
  .withMessage('Tem que escrever seu nome completo'),

  check('email').notEmpty()
  .withMessage('Tem que escrever um e-mail')
  .bail().isEmail().withMessage('Digite um formato de e-mail correto'),

  check('email-repeat').notEmpty()
  .withMessage('Tem que repetir seu e-mail')
  .bail().isEmail().withMessage('Digite um formato de e-mail correto'),

  check('psw').notEmpty()
  .withMessage('Tem que escrever uma senha')
  .bail().isLength({
    min: 6
  }).withMessage('A senha precisa ter 6 caracteres pelo menos'),

  check('psw-repeat').notEmpty()
  .withMessage('Tem que repetir sua senha'),

];

// Formulario de Registro
router.get('/', userController.register);
// processamento de validações e Registro
router.post('/', validations, userController.processoRegister);

module.exports = router;
