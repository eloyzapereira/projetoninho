const Sequelize = require("sequelize");
const connection = require("./database");

const Produto = connection.define("projeto", {
    titulo:{
        type: Sequelize.STRING,
        allownull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allownull: false
    }
});
Produto.sync({force:false});
module.exports = Produto;