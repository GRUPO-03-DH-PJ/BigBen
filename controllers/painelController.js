const Cliente = require('../models/cliente');

const painelController = {
  painelUsuario: async (req, res) => {
    const cliente = await Cliente.findByPk(req.params.id)
    return res.render('painelUsuario', {
      cliente
    });
  },
}

module.exports = painelController;
