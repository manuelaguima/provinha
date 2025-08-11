const conn = require ('./db/conn')
const { Aluno, Livro, Emprestimo } = require('./models/rel')

async function syncDataBase() {
    try{
        await conn.sync({force: true})
        console.log('Tabelas sincronizadas com sucesso!')
    }catch(err){
        console.error('Erro para sincronização das tabelas',err)
    }finally{
        await conn.close()
    }
}

syncDataBase()