const Livro = require('../models/Livro')

const cadastrar = async (req,res) => {
    const valores = req.body
    try{
        const dados = await Livro.create(valores)
        res.status(201).json(dados)
    }catch(err){
        console.error('Erro ao cadastrar os Dados!',err)
        res.status(500).json({message: 'Erro ao cadastrar os Dados!'})
    }
}

module.exports = { cadastrar}