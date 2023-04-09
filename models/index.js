const Sequelize = require('sequelize');

const sequelize = new Sequelize('bigben', 'root', 'dh_grupo3_pi', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;