const Pedido = require('../models/Pedido');

const pedidoController = {
    findAll: async(req, res) => {
        try {
            const pedidos = await Pedido.findAll();
            return res.status(200).json(pedidos);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    findOne: async(req, res) => {
        try {
            const pedido = await Pedido.findByPk(req.params.id);
            if (!pedido) {
                return res.status(404).json({ message: 'Pedido não encontrado' });
            }
            return res.status(200).json(pedido);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    create: async(req, res) => {
        try {
            const pedido = await Pedido.create(req.body);
            return res.status(201).json(pedido);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    update: async(req, res) => {
        try {
            const pedido = await Pedido.findByPk(req.params.id);
            if (!pedido) {
                return res.status(404).json({ message: 'Pedido não encontrado' });
            }
            await pedido.update(req.body);
            return res.status(200).json(pedido);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    delete: async(req, res) => {
        try {
            const pedido = await Pedido.findByPk(req.params.id);
            if (!pedido) {
                return res.status(404).json({ message: 'Pedido não encontrado' });
            }
            await pedido.destroy();
            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
};

module.exports = pedidoController;