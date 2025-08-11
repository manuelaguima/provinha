const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Emprestimo = db.define('emprestimo',{
    codEmprestimo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dataEmprestimo: {
        type: DataTypes.STRING,
        allowNull: false
    },
     idAluno: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'alunos',
            key: 'codAluno'
        }
    },
    idLivro: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'livros',
            key: 'codLivro'
        }
    }
},{
    tableName: 'emprestimos',
    timestamps: false
})

module.exports = Emprestimo
