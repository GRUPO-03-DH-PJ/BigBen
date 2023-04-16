const Categoria = require('../models/categoria');

const categoriasController = {
    categorias: (req, res, next) => {
        return res.render('categorias');
    },

    create: async(req, res) => {
        try {
            const categoria = await Categoria.create(req.body);
            return res.status(201).json(categoria);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    findAll: async(req, res) => {
        try {
            const categorias = await Categoria.findAll();
            return res.status(200).json(categorias);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    findOne: async(req, res) => {
        try {
            const categoria = await Categoria.findByPk(req.params.id);
            if (categoria) {
                return res.status(200).json(categoria);
            }
            return res.status(404).json({ error: 'Categoria não encontrada' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    update: async(req, res) => {
        try {
            const categoria = await Categoria.findByPk(req.params.id);
            if (categoria) {
                const updatedCategoria = await categoria.update(req.body);
                return res.status(200).json(updatedCategoria);
            }
            return res.status(404).json({ error: 'Categoria não encontrada' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    delete: async(req, res) => {
        try {
            const categoria = await Categoria.findByPk(req.params.id);
            if (categoria) {
                await categoria.destroy();
                return res.status(204).json();
            }
            return res.status(404).json({ error: 'Categoria não encontrada' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
};

module.exports = categoriasController;