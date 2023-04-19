const ItemPedido = require('../models/ItemPedido');

const itemPedidoController = {
    findAll: async(req, res) => {
        try {
            const itensPedido = await ItemPedido.findAll();
            return res.status(200).json(itensPedido);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    findOne: async(req, res) => {
        try {
            const itemPedido = await ItemPedido.findByPk(req.params.id);
            if (itemPedido) {
                return res.status(200).json(itemPedido);
            }
            return res.status(404).json({ error: 'Item do Pedido não encontrado' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    create: async(req, res) => {
        try {
            const itemPedido = await ItemPedido.create(req.body);
            return res.status(201).json(itemPedido);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    update: async(req, res) => {
        try {
            const itemPedido = await ItemPedido.findByPk(req.params.id);
            if (itemPedido) {
                await itemPedido.update(req.body);
                return res.status(200).json(itemPedido);
            }
            return res.status(404).json({ error: 'Item do Pedido não encontrado' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    delete: async(req, res) => {
        try {
            const itemPedido = await ItemPedido.findByPk(req.params.id);
            if (itemPedido) {
                await itemPedido.destroy();
                return res.status(204).json();
            }
            return res.status(404).json({ error: 'Item do Pedido não encontrado' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
};

module.exports = itemPedidoController;