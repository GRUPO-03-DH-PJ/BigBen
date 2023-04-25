const Sequelize = require('sequelize');
const sequelize = require('../database');
const Produto = require('./produto');

const ItemPedido = sequelize.define('ItemPedido', {
    IdItemPedido: {
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
}, {
    tableName: 'itempedido',
});

ItemPedido.belongsTo(Produto, { foreignKey: 'IdProduto' });

module.exports = ItemPedido;
