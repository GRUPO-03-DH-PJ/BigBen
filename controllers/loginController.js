const {
  where
} = require('sequelize');
const User = require('../models/cliente')
const bcrypt = require('bcrypt');

function login(req, res) {
  return res.render('loginForm')
};

async function loggingIn(req, res) {
  let userToLogin = await User.findOne({
    where: {
      EmailCliente: req.body.email
    }
  });
  console.log(userToLogin)
  if (userToLogin) {
    let isPasswordVerified = bcrypt.compareSync(req.body.Senha, userToLogin.Senha)
    if (isPasswordVerified) {
      return res.send('Ok! vocé esta Logado!')
    }

    return res.render('loginForm', {
      errors: {
        email: {
          msg: "A senha está inválida"
        }
      }
    });
  }

  return res.render('loginForm', {
    errors: {
      email: {
        msg: "Este email não foi encontrado"
      }
    }
  });
};




module.exports = {
  login,
  loggingIn,
}
