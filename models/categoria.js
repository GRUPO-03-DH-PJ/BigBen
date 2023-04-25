const Sequelize = require('sequelize');
const sequelize = require('../database');

const Categoria = sequelize.define('Categoria', {
    IdCategoria: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    NomeCategoria: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
}, {
    tableName: 'categoria',

});

module.exports = Categoria;
