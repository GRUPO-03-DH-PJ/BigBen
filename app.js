let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');


let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('./public'));
app.use(express.static(path.join(__dirname, 'public')));

// Rota Routes
const homeRoutes = require('./routes/homeRoutes');
app.use('/home', homeRoutes);

const userRoutes = require('./routes/userRoutes'); // Required do method userRouter (Router)
app.use('/users', userRoutes); // Quando usuario digitar na rota /users

const loginRoutes = require('./routes/loginRoutes');
app.use('/login', loginRoutes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(3000, function() {
    console.log('Servidor Rodando na porta 3000!');
});

module.exports = app;