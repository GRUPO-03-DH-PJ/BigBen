const Sequelize = require('sequelize');

const sequelize = new Sequelize('bigben', 'root', '', {
  host: 'localhost',
  port: '3306',
  username: 'root',
  password: '',
  database: 'bigben',
  dialect: 'mysql',
  define: {
    timestamps: false,
  }
});

module.exports = sequelize;
