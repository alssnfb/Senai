const jwt = require('jsonwebtoken')

function validadorDeCookie(req, res, next){
    const token = req.cookies.TOKENAULABE

    if(!token){
        return res.status(401).send({mensagem:"não autorizado"})
    }
    try{

        const decodificado = jwt.verify(token, 'jwt_secretkey')
        next();
    } catch{
        return res.status(401).send({mensagem:"não autorizado"})
    }

}

module.exports = {validadorDeCookie}