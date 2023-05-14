const Produto = require('../models/produto');

function viewATT(req, res) {
  res.render('adminProdutoCreate')
}

async function storeProducts(req, res) {
  const {
    dish,
    sku,
    descriptions,
    price,
    quantity,
    image
  } = req.body;
  const createdMenu = await Produto.create({
    dish,
    sku,
    descriptions,
    price,
    quantity,
    image: req.file.filename
  });
  console.log(createdMenu)
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
  const products = await Menu.findByPk(idProducts)

  return res.render('adminProdutoEdita', {
    products,
    titulo: `Editando Produtos`
  })
}

async function updateProducts(req, res) {
  const idUpdate = req.params.id;
  const {
    dish,
    sku,
    descriptions,
    price,
    quantity,
    image
  } = req.body;

  const toUpdate = await Produto.update({
    dish,
    sku,
    descriptions,
    price,
    quantity,
    image,
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
  storeProducts,
  listProduct,
  pageProduct,
  editProducts,
  updateProducts,
  destroyProducts
}
