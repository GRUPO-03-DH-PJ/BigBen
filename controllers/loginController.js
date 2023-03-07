const loginController = {
    login: (req, res) =>{
        return res.render('loginForm');
    },
    processoLogin: (req, res) =>{
       return res.send('Ok, Login feito com Sucesso!');
    },
};

module.exports = loginController;