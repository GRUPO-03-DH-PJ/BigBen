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
    await bcrypt.compareSync(req.body.Senha, userToLogin.Senha);
    if (userToLogin) {
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
