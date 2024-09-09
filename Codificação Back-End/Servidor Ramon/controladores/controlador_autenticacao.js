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
            'jwt_secretkey',
            {expiresIn: 1000*60*60*24*365}
        )
        console.log(token)

        res.cookie("TokenAulaBE").send({message:'ok'})
    } catch(e) {
        console.log(e)
    }
}


module.exports = {login}