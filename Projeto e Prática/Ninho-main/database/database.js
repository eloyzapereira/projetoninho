const Sequelize = require("sequelize");

const connection = new Sequelize('projetosegunda',
'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;