const User = require('./clienteController')
const bcrypty = require('bcrypt');

function login(req, res) {
  return res.render('loginForm')
};

function loggingIn(req, res) {
  let userToLogin = User.findOne('email', req.body.email);
  if (userToLogin) {
    let isPasswordVerified = bcrypty.compareSync(req.body.psw, userToLogin.psw)
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
