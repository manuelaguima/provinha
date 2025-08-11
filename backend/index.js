const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 3000
const hostname = 'localhost'

const conn = require('./db/conn')
const alunoController = require('./controller/aluno.controller')
const emprestimoController = require('./controller/emprestimo.controller')
const livroController = require('./controller/livro.controller')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


app.post('/emprestimo', emprestimoController.cadastrar)
app.put('/emprestimo/:id', emprestimoController.atualizar)
app.delete('/emprestimo/:id', emprestimoController.apagar)
app.get('/emprestimo', emprestimoController.listar)

app.post('/aluno', alunoController.cadastrar)
app.post('/livro', livroController.cadastrar)


app.get('/',(req,res)=>{
    res.status(200).json({message:'Aplicação rodando com sucesso!!!'})
})

conn.sync()
.then(()=>{
    app.listen(PORT,hostname,()=>{
        console.log(`Servidor rodando em http://${hostname}:${PORT}`)
    })
})
.catch((err)=>{
    console.error('Erro de conexão com o banco! :(',err)
})