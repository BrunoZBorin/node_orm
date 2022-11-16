const database = require('../models')

class PessoaController{
    
    static async listAllPessoas(req, res){
        try{
            const todasAsPessoas = await database.Pessoas.findAll();
            return res.status(200).json(todasAsPessoas)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async getPessoa(req, res){
        const{ id } = req.params
        try{
            const pessoa = await database.Pessoas.findOne( {
                    where:{ 
                        id:Number(id) 
                    }
                })
            return res.status(200).json(pessoa)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async createPessoa(req, res){
        const pessoa = req.body
        try{
            const pessoaCriada = await database.Pessoas.create(pessoa)
            return res.status(200).json(pessoaCriada)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async updatePessoa(req, res){
        const{ id } = req.params
        const novaInfo = req.body
        try{
            const pessoaAtualizada = await database.Pessoas.update(novaInfo, {
                where:{ 
                    id:Number(id) 
                }
            })
            return res.status(200).json(pessoaAtualizada)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async deletePessoa(req, res){
        const{ id } = req.params
        try{
            await database.Pessoas.destroy({
                where:{ 
                    id:Number(id) 
                }
            })
            return res.status(200).json({mensagem:"Pessoa com o id "+ id +" excluído"})
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController