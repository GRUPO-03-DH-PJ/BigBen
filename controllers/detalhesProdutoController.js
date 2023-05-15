const detalhesProdutoController = {
  detalhesProduto: (req, res, next) => {
    return res.render('detalhesProduto');
  },
  produtoMonitor: (req, res, next) => {
    return res.render('produtoMonitor');
  },
  produtoNotbook: (req, res) => {
    return res.render('produtoNotbook')
  },
  produtoMause: (req, res) => {
    return res.render('produtoMause')
  },
  produtoSwitch: (req, res) => {
    return res.render('produtoSwitch')
  }
}


module.exports = detalhesProdutoController;
