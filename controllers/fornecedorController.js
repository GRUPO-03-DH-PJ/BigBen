const Fornecedor = require('../models/fornecedor');

const fornecedorController = {
    findAll: async(req, res) => {
        try {
            const fornecedores = await Fornecedor.findAll();
            return res.status(200).json(fornecedores);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    findOne: async(req, res) => {
        try {
            const fornecedor = await Fornecedor.findByPk(req.params.id);
            if (!fornecedor) {
                return res.status(404).json({ message: 'Fornecedor não encontrado' });
            }
            return res.status(200).json(fornecedor);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    create: async(req, res) => {
        try {
            const fornecedor = await Fornecedor.create(req.body);
            return res.status(201).json(fornecedor);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    update: async(req, res) => {
        try {
            const fornecedor = await Fornecedor.findByPk(req.params.id);
            if (!fornecedor) {
                return res.status(404).json({ message: 'Fornecedor não encontrado' });
            }
            await fornecedor.update(req.body);
            return res.status(200).json(fornecedor);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    delete: async(req, res) => {
        try {
            const fornecedor = await Fornecedor.findByPk(req.params.id);
            if (!fornecedor) {
                return res.status(404).json({ message: 'Fornecedor não encontrado' });
            }
            await fornecedor.destroy();
            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
};

module.exports = fornecedorController;