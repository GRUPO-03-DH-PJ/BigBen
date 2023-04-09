const Sequelize = require('sequelize');
const sequelize = require('../database');

const Pedido = sequelize.define('Pedido', {
    IdPedido: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    DataPedido: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    HoraPedido: {
        type: Sequelize.TIME,
        allowNull: false
    },
    NumeroPedido: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    PrecoTotal: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
    },
    EnderecoEntrega: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    FormaPagamento: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    IdCliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Cliente',
            key: 'IdCliente'
        }
    }
});

module.exports = Pedido;