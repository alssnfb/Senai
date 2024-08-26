const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rotas = require('./rotas/rotas_produtos')


app.use(bodyParser.json())

app.use('/produtos', rotas)

app.listen(8000)