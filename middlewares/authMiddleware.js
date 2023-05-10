function auth(req, res, next) {
  if (typeof (req.session.usuario) != "undefined") {
    return next();
  } else {
    return res.send('Vocé precisa está logado para ter Acesso')
  }
}

module.exports = auth
