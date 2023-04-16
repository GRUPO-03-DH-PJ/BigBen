const ItemPedido = require('../models/ItemPedido');

class itemPedidoController {
    static async findAll(req, res) {
        try {
            const itensPedido = await ItemPedido.findAll();
            return res.status(200).json(itensPedido);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async findOne(req, res) {
        try {
            const itemPedido = await ItemPedido.findByPk(req.params.id);
            if (!itemPedido) {
                return res.status(404).json({ message: 'Item do Pedido não encontrado' });
            }
            return res.status(200).json(itemPedido);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async create(req, res) {
        try {
            const itemPedido = await ItemPedido.create(req.body);
            return res.status(201).json(itemPedido);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async update(req, res) {
        try {
            const itemPedido = await ItemPedido.findByPk(req.params.id);
            if (!itemPedido) {
                return res.status(404).json({ message: 'Item do Pedido não encontrado' });
            }
            await itemPedido.update(req.body);
            return res.status(200).json(itemPedido);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const itemPedido = await ItemPedido.findByPk(req.params.id);
            if (!itemPedido) {
                return res.status(404).json({ message: 'Item do Pedido não encontrado' });
            }
            await itemPedido.destroy();
            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = itemPedidoController;