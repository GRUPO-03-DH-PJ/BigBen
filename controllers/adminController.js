const Produto = require('../models/produto');

function viewATT(req, res) {
  res.render('adminProdutoCreate')
}

async function CreateProducts(req, res) {
  const {
    nomeProduto,
    descricaoProduto,
    precoProduto,
    imagemProduto,
    quantidadeEstoque
  } = req.body;

  let createProduto = {
    NomeProduto: nomeProduto,
    DescricaoProduto: descricaoProduto,
    PrecoProduto: precoProduto,
    ImagemProduto: imagemProduto,
    QuantidadeEstoque: quantidadeEstoque
  }
  let newProducts = await Produto.create(createProduto);

  return res.redirect('/administrador/lista-de-produtos');
};

async function listProduct(req, res) {
  const products = await Produto.findAll()

  res.render('adminProduto', {
    allproducts: products
  })
};

async function editProducts(req, res) {
  const idProducts = req.params.id;
  const products = await Produto.findByPk(idProducts)

  return res.render('adminProdutoEdita', {
    products,
    titulo: `Editando Produtos`
  })
};

async function updateProducts(req, res) {
  const idUpdate = req.params.id;
  const {
    nomeProduto,
    descricaoProduto,
    precoProduto,
    imagemProduto,
    quantidadeEstoque
  } = req.body;

  const toUpdate = await Produto.update({
    NomeProduto: nomeProduto,
    DescricaoProduto: descricaoProduto,
    PrecoProduto: precoProduto,
    ImagemProduto: imagemProduto,
    QuantidadeEstoque: quantidadeEstoque
  }, {
    where: {
      id: idUpdate
    }
  })

  return res.redirect('/administrador/lista-de-produtos')
};

async function destroyProducts(req, res) {
  const idToDelete = req.params.id;
  await Produto.destroy({
    where: {
      id: idToDelete
    }
  });

  return res.redirect('/administrador/lista-de-produtos')
};

function pageProduct(req, res) {
  res.render('adminProdutoCreate', {
    titulo: 'Cadastro de Produtos'
  })
};

module.exports = {
  viewATT,
  CreateProducts,
  listProduct,
  pageProduct,
  editProducts,
  updateProducts,
  destroyProducts
}
