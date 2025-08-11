const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Livro = db.define('livro',{
    codLivro: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    autor:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: 'livros',
    timestamps: false
})

module.exports = Livro