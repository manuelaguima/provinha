const Emprestimo = require('../models/Emprestimo')

const cadastrar = async (req,res) => {
    const valores = req.body
    try{
        const dados = await Emprestimo.create(valores)
        res.status(201).json(dados)
    }catch(err){
        console.error('Erro ao cadastrar os Dados!',err)
        res.status(500).json({message: 'Erro ao cadastrar os Dados!'})
    }
}

const atualizar = async (req,res) => {
    const id = req.params.id
    const valores = req.body
    console.log(id)
    console.log(valores)

    try{
        const VerID = await Emprestimo.findByPk(id)
        if(VerID === null){
            console.log(`Emprestimo não encontrado!`)
            res.status(404).json({message: `Emprestimo não encontrado!`})
        }else{
            await Emprestimo.update(valores, ({where: { codEmprestimo: id}}))
            const dados = await Emprestimo.findByPk(id)
            res.status(200).json(dados)
        }
        
    }catch(err){
        console.error('Erro ao atualizar os Dados!',err)
        res.status(500).json({message: 'Erro ao atualizar os Dados!'})
    }
}

const apagar = async (req,res) => {
    const id = req.params.id
    console.log(id)

    try{
        const VerID = await Emprestimo.findByPk(id)
        if(VerID === null){
            console.log(`Emprestimo não encontrado!`)
            res.status(404).json({message: `Emprestimo não encontrado!`})
        }else{
            await Emprestimo.destroy({where: { codEmprestimo: id}})
            res.status(204).json({message: `Dados Excluídos com sucesso!`})
        }
        
    }catch(err){
        console.error('Erro ao apagar os Dados!',err)
        res.status(500).json({message: 'Erro ao apagar os Dados!'})
    }
}

const listar = async (req,res)=>{
    try{
        const dados = await Emprestimo.findAll()
        res.status(200).json(dados)
    }catch(err){
        console.error('Erro ao listar os Dados!',err)
        res.status(500).json({message: 'Erro ao listar os Dados!'})
    }
}

module.exports = { cadastrar, listar, atualizar, apagar }