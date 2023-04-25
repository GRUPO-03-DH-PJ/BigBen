const Sequelize = require('sequelize');
const sequelize = require('../database');

const Produto = sequelize.define('Produto', {
    IdProduto: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    NomeProduto: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    DescricaoProduto: {
        type: Sequelize.TEXT
    },
    PrecoProduto: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
    },
    ImagemProduto: {
        type: Sequelize.STRING(255)
    },
    QuantidadeEstoque: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'produto',
});

module.exports = Produto;
