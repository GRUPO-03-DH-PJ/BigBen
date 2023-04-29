const Sequelize = require('sequelize');
const sequelize = require('../database');

const Cliente = sequelize.define('Cliente', {
    IdCliente: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    NomeCliente: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    EmailCliente: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    Celular: {
        type: Sequelize.STRING(20)
    },
    TelefoneCliente: {
        type: Sequelize.STRING(20)
    },
    CPF: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
    },
    EnderecoCliente: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    Numero: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Complemento: {
        type: Sequelize.STRING(100)
    },
    Cidade: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    Estado: {
        type: Sequelize.STRING(2),
        allowNull: false
    },
    CEP: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    Genero: {
        type: Sequelize.STRING(20)
    },
    Senha: {
        type: Sequelize.STRING(50)
    },

}, {
    tableName: 'cliente',
});

module.exports = Cliente;
