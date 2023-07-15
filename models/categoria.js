const Sequelize = require('sequelize');
const sequelize = require('../database');
const Produto = require('./produto');

const Categoria = sequelize.define('Categoria', {
  IdCategoria: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    references: 'produto',
    referencesKey: 'idCategoria'
  },
  NomeCategoria: {
    type: Sequelize.STRING(100),
    allowNull: false
  }
}, {
  tableName: 'categoria',

});


module.exports = Categoria;
