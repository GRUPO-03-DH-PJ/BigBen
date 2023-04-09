const Sequelize = require('sequelize');
const sequelize = require('../database');

const Fornecedor = sequelize.define('Fornecedor', {
    IdFornecedor: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    NomeFornecedor: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    EnderecoFornecedor: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    TelefoneFornecedor: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    EmailFornecedor: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    }
});

module.exports = Fornecedor;