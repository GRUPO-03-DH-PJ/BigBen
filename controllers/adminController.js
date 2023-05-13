const Produto = require('../models/produto');
const Categoria = require('../models/categoria');

function admin(req, res) {
  return res.render('admin')
}

async function criarProduto(req, res) {
  let {
    nomeProduto,
    descricaoProduto,
    imgProduto,
    precoProduto,
    estoque,
    categoria
  } = req.body;

  const criar = await Produto.create({
    NomeProduto: nomeProduto,
    DescricaoProduto: descricaoProduto,
    PrecoProduto: precoProduto,
    ImagemProduto: imgProduto,
    QuantidadeEstoque: estoque,
    NomeCategoria: categoria
  });

  res.render('home')
}

async function editar(req, res) {
  let {
    nomeProduto,
    descricaoProduto,
    imgProduto,
    precoProduto,
    estoque,
    categoria
  } = req.body;

  const produtos = await Produto.findAll(id);

  return res.render('adminProdutos', {
    produtos
  })

}

async function listProduto(req, res) {
  let Produtos = [{}]
  res.render('adminProdutos', {
    listProduto: Produtos
  })
}

async function deletarProduto(req, res) {
  let {
    id
  } = req.params;

  res.send("Estou deletando o Produto com o id: " + id)
}

async function viewsAttPT(req, res) {
  let {
    id
  } = req.params;

  res.render('admin', {
    produto: produtos[id]
  })
}


module.exports = {
  admin,
  criarProduto,
  deletarProduto,
  editar,
  viewsAttPT,
  listProduto,
}
