const Pagamento = require('../models/pagamento');

exports.create = async(req, res) => {
    try {
        const pagamento = await Pagamento.create(req.body);
        return res.status(201).json(pagamento);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.findAll = async(req, res) => {
    try {
        const pagamentos = await Pagamento.findAll();
        return res.status(200).json(pagamentos);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.findOne = async(req, res) => {
    try {
        const pagamento = await Pagamento.findByPk(req.params.id);
        if (pagamento) {
            return res.status(200).json(pagamento);
        }
        return res.status(404).json({ error: 'Pagamento não encontrado' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.update = async(req, res) => {
    try {
        const pagamento = await Pagamento.findByPk(req.params.id);
        if (pagamento) {
            const updatedPagamento = await pagamento.update(req.body);
            return res.status(200).json(updatedPagamento);
        }
        return res.status(404).json({ error: 'Pagamento não encontrado' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.delete = async(req, res) => {
    try {
        const pagamento = await Pagamento.findByPk(req.params.id);
        if (pagamento) {
            await pagamento.destroy();
            return res.status(204).json();
        }
        return res.status(404).json({ error: 'Pagamento não encontrado' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.getTotal = async(req, res) => {
    try {
        const total = await Pagamento.sum('valor_total');
        return res.status(200).json(total);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};