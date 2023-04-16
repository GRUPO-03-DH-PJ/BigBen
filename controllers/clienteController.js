const Cliente = require('../models/cliente');

const clienteController = {
    findAll: async(req, res) => {
        try {
            const clientes = await Cliente.findAll();
            return res.status(200).json(clientes);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    findOne: async(req, res) => {
        try {
            const cliente = await Cliente.findByPk(req.params.id);
            if (cliente) {
                return res.status(200).json(cliente);
            }
            return res.status(404).json({ error: 'Cliente não encontrado' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    create: async(req, res) => {
        try {
            const cliente = await Cliente.create(req.body);
            return res.status(201).json(cliente);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    update: async(req, res) => {
        try {
            const cliente = await Cliente.findByPk(req.params.id);
            if (cliente) {
                const updatedCliente = await cliente.update(req.body);
                return res.status(200).json(updatedCliente);
            }
            return res.status(404).json({ error: 'Cliente não encontrado' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    delete: async(req, res) => {
        try {
            const cliente = await Cliente.findByPk(req.params.id);
            if (cliente) {
                await cliente.destroy();
                return res.status(204).json();
            }
            return res.status(404).json({ error: 'Cliente não encontrado' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
};

module.exports = clienteController;