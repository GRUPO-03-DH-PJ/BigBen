const {
  validationResult
} = require('express-validator');
const User = require('../models/cliente');
const bcrypt = require('bcrypt');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const controller = {
  register: (req, res) => {
    return res.render('registerForm');
  },
  processoRegister: async (req, res) => {
    const resultValidations = validationResult(req);

    if (resultValidations.errors.length > 0) {
      return res.render('registerForm', {
        errors: resultValidations.mapped(),
        oldData: req.body
      });
    };

    const {
      nome,
      email,
      celular,
      telefone,
      cpf,
      endereco,
      numero,
      complemento,
      cidade,
      estado,
      cep,
      genero,
      psw
    } = req.body;

    let userExists = await User.findOne({
      where: {
        EmailCliente: email
      }
    });

    if (userExists) {
      return res.render('registerForm', {
        errors: {
          email: {
            msg: "Este email já está registrado"
          }
        },
        oldData: req.body
      });
    }

    let userToCreate = {
      NomeCliente: nome,
      EmailCliente: email,
      Celular: celular,
      TelefoneCliente: telefone,
      CPF: cpf,
      EnderecoCliente: endereco,
      Numero: numero,
      Complemento: complemento,
      Cidade: cidade,
      Estado: estado,
      CEP: cep,
      Genero: genero,
      Senha: bcrypt.hashSync(req.body.psw, 10),
    }
    let userCreated = await User.create(userToCreate);


    return res.redirect('/login');
  },
};

module.exports = controller;
