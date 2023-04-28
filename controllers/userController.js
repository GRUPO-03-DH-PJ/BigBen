const {
  validationResult
} = require('express-validator'); // validando resultado
const User = require('./clienteController');
const bcrypty = require('bcrypt');

const controller = {
  register: (req, res) => {
    return res.render('registerForm');
  },
  processoRegister: async (req, res) => {
    const resultValidations = validationResult(req); // requerindo as validaçoes no resultado de validaçoes.
    // Se o resultado da validações for vazio , enviamos o errors para o formulario
    if (resultValidations.errors.length > 0) {
      return res.render('registerForm', {
        errors: resultValidations.mapped(),
        oldData: req.body // mandando para views todoas as propriedade de errors
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
        email: email
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
      senha: bcrypty.hashSync(req.body.psw, 10)
    }

    let userCreated = await User.create(userToCreate);

    return res.redirect('/login');
  },
};
module.exports = controller;
