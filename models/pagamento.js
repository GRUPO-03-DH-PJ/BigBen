const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Pedido = require('./pedido');
const Cliente = require('./cliente');

const Pagamento = sequelize.define('Pagamento', {
    IdPagamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    numero_cartao: {
        type: DataTypes.STRING(16),
        allowNull: true,
    },
    validade: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    cvv: {
        type: DataTypes.STRING(3),
        allowNull: true,
    },
    tipo_pagamento: {
        type: DataTypes.STRING(10),
        allowNull: true,
    },
    valor_total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    link_boleto: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    link_pix: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    IdPedido: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    IdCliente: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    tableName: 'pagamento',
});

module.exports = Pagamento;
