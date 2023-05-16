const Produto = require('../models/produto')

const detalhesProdutoController = {
  detalhesProduto: async (req, res, next) => {
    const product = await Produto.findByPk(req.params.id)
    console.log(product)
    if (!product) {
      return res.send("Produto Não encontrado")
    }
    return res.render('detalhesProduto', {
      product
    });
  },
}


module.exports = detalhesProdutoController;
