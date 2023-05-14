const detalhesProdutoController = {
    detalhesProduto: (req, res, next) => {
        return res.render('detalhesProduto');
    },
    produtoMonitor: (req, res, next) => {
        return res.render('produtoMonitor');
    },
}


module.exports = detalhesProdutoController;