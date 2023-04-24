const Sequelize = require('sequelize');

const sequelize = new Sequelize('bigben', 'root', 'dh_grupo3_pi', {
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: 'dh_grupo3_pi',
    database: 'bigben',
    dialect: 'mysql',
    define: {
        timestamps: false,
    }
});

module.exports = sequelize;
