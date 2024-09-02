const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rotas_produtos = require('./rotas/rotas_produtos')
const rotas_clientes = require('./rotas/rotas_clientes')


app.use(bodyParser.json())

app.use('/produtos', rotas_produtos)

app.use('/cliente', rotas_clientes)

app.listen(7777)

module.exports = app;