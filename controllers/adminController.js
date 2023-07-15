const Produto = require('../models/produto');
const Categoria = require('../models/categoria');

function viewATT(req, res) {
  res.render('adminProdutoCreate')
}

async function CreateProducts(req, res) {
  const {
    nomeProduto,
    descricaoProduto,
    precoProduto,
    quantidadeEstoque,
    iDCategoria
  } = req.body;

  let createProduto = {
    NomeProduto: nomeProduto,
    DescricaoProduto: descricaoProduto,
    PrecoProduto: precoProduto,
    ImagemProduto: req.file.filename,
    QuantidadeEstoque: quantidadeEstoque,
    IdCategoria: iDCategoria
  }
  let newProducts = await Produto.create(createProduto);

  return res.redirect('/administrador/lista-de-produtos');
};

async function listProduct(req, res) {
  const products = await Produto.findAll()
  const category = await Categoria.findAll()

  res.render('adminProduto', {
    allproducts: products,
    allCategory: category
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
    quantidadeEstoque
  } = req.body;

  const toUpdate = await Produto.update({
    NomeProduto: nomeProduto,
    DescricaoProduto: descricaoProduto,
    PrecoProduto: precoProduto,
    ImagemProduto: req.file.filename,
    QuantidadeEstoque: quantidadeEstoque
  }, {
    where: {
      IdProduto: idUpdate
    }
  })

  return res.redirect('/administrador/lista-de-produtos')
};

async function destroyProducts(req, res) {
  const idToDelete = req.params.id;
  await Produto.destroy({
    where: {
      IdProduto: idToDelete
    }
  });

  return res.redirect('/administrador/lista-de-produtos')
};

function pageProduct(req, res) {
  res.render('adminProdutoCreate', {
    titulo: 'Cadastro de Produtos'
  })
};

// Relaçoes de Categoria com Produto

function viewCategoria(req, res) {
  return res.render("adminCategoria")
};

async function CriarCategoria(req, res) {
  const {
    nomeCategoria,
  } = req.body;

  let createCategory = {
    NomeCategoria: nomeCategoria,
  }
  let newcategory = await Categoria.create(createCategory);

  return res.redirect('/administrador/cadastrando-categoria');
};




module.exports = {
  viewATT,
  CreateProducts,
  listProduct,
  pageProduct,
  editProducts,
  updateProducts,
  destroyProducts,
  CriarCategoria,
  viewCategoria
}
