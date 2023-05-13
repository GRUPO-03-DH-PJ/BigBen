let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let session = require('express-session');
let becrypt = require('bcrypt');


let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: "projetoE-commes",
  resave: true,
  saveUninitialized: true
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static('./public'));
app.use(express.static(path.join(__dirname, 'public')));

// Rota Routes
const detalhesProdutoRoutes = require('./routes/detalhesProdutoRoutes');
const categoriasRoutes = require('./routes/categoriasRoutes');
const loginRoutes = require('./routes/loginRoutes');
const userRoutes = require('./routes/userRoutes');
const homeRoutes = require('./routes/homeRoutes');
const carrinhoRoutes = require('./routes/carrinhoRoutes');
const painelRoutes = require('./routes/painelRoutes');
const fornecedorRoutes = require('./routes/fornecedorRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const pagamentoRoutes = require('./routes/pagamentoRoutes');
const itemPedidoRoutes = require('./routes/itemPedidoRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');
const produtosRoutes = require('./routes/produtosRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use('/home', homeRoutes);
app.use('/users', userRoutes);
app.use('/login', loginRoutes);
app.use('/categorias', categoriasRoutes);
app.use('/detalhes', detalhesProdutoRoutes);
app.use('/carrinho', carrinhoRoutes);
app.use('/painelUsuario', painelRoutes);
app.use('/fornecedor', fornecedorRoutes);
app.use('/cliente', clienteRoutes);
app.use('/pagamento', pagamentoRoutes);
app.use('/itemPedido', itemPedidoRoutes);
app.use('/pedidos', pedidoRoutes);
app.use('/produtos', produtosRoutes);
app.use('/admin', adminRoutes)



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3001, function () {
  console.log('Servidor Rodando na porta 3001!');
});

module.exports = app;
