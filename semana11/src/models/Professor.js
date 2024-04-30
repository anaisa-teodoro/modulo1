const { DataTypes} = require("sequelize");
const { connection } = require("../database/connection");

//[M1S11] Ex. 6 - Novo CRUD - Professores
const Professor = connection.define('professores', {
    nome: {
        type: DataTypes.STRING
    },
    curso: {
        type: DataTypes.STRING
    },
    celular: {
        type: DataTypes.STRING
    },
    salario: {
        type: DataTypes.FLOAT
    }
})

module.exports = Professor