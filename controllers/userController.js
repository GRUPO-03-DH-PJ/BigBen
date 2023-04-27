const {
  validationResult
} = require('express-validator'); // validando resultado
const User = require('./clienteController');
const bcrypty = require('bcrypt');

const controller = {
  register: (req, res) => {
    return res.render('registerForm');
  },
  processoRegister: (req, res) => {
    const resultValidations = validationResult(req); // requerindo as validaçoes no resultado de validaçoes.
    // Se o resultado da validações for vazio , enviamos o errors para o formulario
    if (resultValidations.errors.length > 0) {
      return res.render('registerForm', {
        errors: resultValidations.mapped(),
        oldData: req.body // mandando para views todoas as propriedade de errors
      });
    };

    let userExists = User.findOne("email", req.body.email);

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
      ...req.body,
      psw: bcrypty.hashSync(req.body.psw, 10),
    }

    let userCreated = User.create(userToCreate);

    return res.redirect('/login');
  },
};
module.exports = controller;
