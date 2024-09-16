const db = require('../db.json')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const login = async (req, res) => {
    try{
        const {email, senha} = req.body
        const lista_clientes = db.clientes
        if(!email || !senha){
            res.send({error: 'EMAIL OU SENHA NÃO ENVIADOS!'})
        }
        const cliente = lista_clientes.find((cliente) => cliente.email == email)

        if(!cliente){
            res.status(404).send({error: 'NÃO ENCONTRADO'})
        }

        const senhaValida = bcrypt.compareSync(senha, cliente.senha)
        if(!senhaValida){
            res.send({error: 'A SENHA NÃO É VÁLIDA!'})
        }
        
        const token = jwt.sign(
            {
                nome: cliente.nome,
                email: cliente.email,
                _id: cliente.id
            },
            process.env.chave_criptografia,
            {expiresIn: 1000*60*60*24*365}
        )
        console.log(token)

        res.cookie("TOKENAULABE").send({message:'ok'})
    } catch(e) {
        console.log(e)
    }
}

const logout = async(req, res) => {
    res.cookie('TOKENAULABE','none',expiresIn=5)
    res.send({message:'o usuario fez logout'})
}
module.exports = {login, logout}