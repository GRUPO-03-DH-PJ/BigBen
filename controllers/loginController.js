const User = require('../models/cliente')
const bcrypty = require('bcrypt');

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
    let isPasswordVerified = await bcrypty.compare(req.body.psw, userToLogin.Senha);
    if (isPasswordVerified) {
      return res.render('home')
    }

    return res.render('loginForm', {
      errors: {
        email: {
          msg: "A senha está inválida"
        }
      }
    });
  }
};




module.exports = {
  login,
  loggingIn,
}
