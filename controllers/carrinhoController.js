const Carrinho = require('../models/carrinho');


const carrinhoController = {
    carrinho: (req, res, next) => {
        return res.render('carrinho');
    },
}

exports.create = async(req, res) => {
    try {
        const carrinho = await Carrinho.create(req.body);
        return res.status(201).json(carrinho);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.findAll = async(req, res) => {
    try {
        const carrinhos = await Carrinho.findAll();
        return res.status(200).json(carrinhos);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.findOne = async(req, res) => {
    try {
        const carrinho = await Carrinho.findByPk(req.params.id);
        if (carrinho) {
            return res.status(200).json(carrinho);
        }
        return res.status(404).json({ error: 'Carrinho não encontrado' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.update = async(req, res) => {
    try {
        const carrinho = await Carrinho.findByPk(req.params.id);
        if (carrinho) {
            const updatedCarrinho = await carrinho.update(req.body);
            return res.status(200).json(updatedCarrinho);
        }
        return res.status(404).json({ error: 'Carrinho não encontrado' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.delete = async(req, res) => {
    try {
        const carrinho = await Carrinho.findByPk(req.params.id);
        if (carrinho) {
            await carrinho.destroy();
            return res.status(204).json();
        }
        return res.status(404).json({ error: 'Carrinho não encontrado' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};



module.exports = carrinhoController;