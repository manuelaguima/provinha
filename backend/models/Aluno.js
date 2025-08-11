const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Aluno = db.define('Aluno',{
    codAluno: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    matricula:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: 'alunos',
    timestamps: false
})

module.exports = Aluno