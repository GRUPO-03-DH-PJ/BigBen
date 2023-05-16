const Sequelize = require('sequelize');
const sequelize = require('../database');


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
}, {
    tableName: 'carrinho',
});

Carrinho.associate = function(models) {
    Carrinho.belongsTo(models.Cliente, { foreignKey: 'IdCliente' });
    Produto.belongsToMany(models.Carrinho, { through: 'Produto_Carrinho' });
};





module.exports = Carrinho;
