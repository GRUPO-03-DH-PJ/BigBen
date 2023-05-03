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
  })

  if (userToLogin) {
    const passWordVerific = bcrypt.compareSync(req.body.Senha, userToLogin.Senha);
    if (passWordVerific) {
      console.log("Deu Certo!")
    } else {
      return res.render('loginForm', {
        errors: {
          email: {
            msg: "A senha está inválida"
          }
        }
      });
    }
  } else {
    return res.render('loginForm', {
      errors: {
        email: {
          msg: "Este email não foi encontrado"
        }
      }
    });
  }
};




module.exports = {
  login,
  loggingIn,
}
