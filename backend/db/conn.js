const {Sequelize} = require ('sequelize')
const sequelize = new Sequelize ('db_biblioteca','root','senai',{
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
})

sequelize.authenticate()
.then(()=>{
    console.log('conexão com o banco de dados realizada com sucesso!')
})
.catch((err)=>{
    console.error('erro com a conexão com o banco de dados',err)
})

module.exports = sequelize