require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const rotas_produtos = require('./rotas/rotas_produtos')
const rotas_clientes = require('./rotas/rotas_clientes')
const rotas_autenticacao = require('./rotas/rotas_autenticacao')


app.use(bodyParser.json())
app.use(cookieParser())

app.use('/produtos', rotas_produtos)

app.use('/cliente', rotas_clientes)

app.use('/auth', rotas_autenticacao)

app.listen(3333)

module.exports = app;