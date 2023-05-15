const Produto = require('../models/produto');

function viewATT(req, res) {
  res.render('adminProdutoCreate')
}

async function CreateProducts(req, res) {
  const {
    nomeProduto,
    descricaoProduto,
    precoProduto,
    quantidadeEstoque,
    imagemProduto
  } = req.body;

  const createProduto = await Produto.create({
    NomeProduto: nomeProduto,
    DescricaoProduto: descricaoProduto,
    PrecoProduto: precoProduto,
    ImagemProduto: imagemProduto,
    QuantidadeEstoque: quantidadeEstoque
  });
  console.log(createProduto)
  return res.redirect('/administrador/lista-de-produtos')
}

async function listProduct(req, res) {
  const products = await Produto.findAll()
  console.log(products)

  res.render('adminProduto', {
    products,
    titulo: 'Produtos'
  })
}

async function editProducts(req, res) {
  const idProducts = req.params.id;
  const products = await Produto.findByPk(idProducts)

  return res.render('adminProdutoEdita', {
    products,
    titulo: `Editando Produtos`
  })
}

async function updateProducts(req, res) {
  const idUpdate = req.params.id;
  const {
    nomeProduto,
    descricaoProduto,
    precoProduto,
    quantidadeEstoque,
    imagemProduto
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

  console.log(toUpdate)
  return res.redirect('/administrador/lista-de-produtos')
}

async function destroyProducts(req, res) {
  const idToDelete = req.params.id;
  await Produto.destroy({
    where: {
      id: idToDelete
    }
  });

  console.log(idToDelete)
  return res.redirect('/administrador/lista-de-produtos')
}

function pageProduct(req, res) {
  res.render('adminProdutoCreate', {
    titulo: 'Cadastro de Produtos'
  })
}

module.exports = {
  viewATT,
  CreateProducts,
  listProduct,
  pageProduct,
  editProducts,
  updateProducts,
  destroyProducts
}
