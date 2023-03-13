const { validationResult } = require('express-validator'); // validando resultado



const controller = {
    register: (req, res) =>{
        return res.render('registerForm');
    },
    processoRegister: (req, res) =>{
       const resultValidations = validationResult(req); // requerindo as validaçoes no resultado de validaçoes.
       // Se o resultado da validações for vazio , enviamos o errors para o formulario 
       if (resultValidations.errors.length > 0) {
        return res.render('registerForm', {
            errors: resultValidations.mapped(),
            oldData: req.body  // mandando para views todoas as propriedade de errors
        });
       };
       return res.send('Ok, as validaçoes Passaram');
    },
};

module.exports = controller;