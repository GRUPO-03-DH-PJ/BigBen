const { literal } = require('sequelize');
const Cliente = require('../models/cliente');
const Pagamento = require('../models/pagamento');


const pagamentoController = {
    create: async(req, res) => {
        const { pagamento, cartao, validade, cvv } = req.body;

        const { nome, email, celular, telefone, cpf, endereco, numero, complemento, cidade, estado, cep, genero, senha } = req.body;
        try {
            let cliente = await Cliente.findOne({ where: { CPF: cpf } });
            if (!cliente) {
                cliente = await Cliente.create({
                    NomeCliente: nome,
                    EmailCliente: email,
                    Celular: celular,
                    TelefoneCliente: telefone,
                    CPF: cpf,
                    EnderecoCliente: endereco,
                    Numero: numero,
                    Complemento: complemento,
                    Cidade: cidade,
                    Estado: estado,
                    CEP: cep,
                    Genero: genero,
                    senha: senha
                });
            }
            const pagamento = await Pagamento.create(req.body);
            return res.status(201).json(pagamento);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    findAll: async(req, res) => {
        try {
            const pagamentos = await Pagamento.findAll();
            return res.status(200).json(pagamentos);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    findOne: async(req, res) => {
        try {
            const pagamento = await Pagamento.findByPk(req.params.id);
            if (pagamento) {
                return res.status(200).json(pagamento);
            }
            return res.status(404).json({ error: 'Pagamento não encontrado' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    update: async(req, res) => {
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
    },
    delete: async(req, res) => {
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
    },
};

module.exports = pagamentoController;
