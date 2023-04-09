const Sequelize = require('sequelize');
const sequelize = require('../database');
const Produto = require('./produto');
const Cliente = require('./cliente');

const Carrinho = sequelize.define('Carrinho', {
    IdCarrinho: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    PrecoUnitario: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
    },
    Total: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
    }
});

Carrinho.belongsTo(Produto, { foreignKey: 'IdProduto' });
Carrinho.belongsTo(Cliente, { foreignKey: 'IdCliente' });

module.exports = Carrinho;