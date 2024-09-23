require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')

const rotas_produtos = require('./routes/rotas_produtos')
const rotas_clientes = require('./routes/rotas_clientes')
const rotas_autenticacao = require('./routes/rotas_autenticacao')

const swaggerDocument = YAML.load('./docs/documentation.yaml')

app.use(bodyParser.json())
app.use(cookieParser())

app.use('/produtos', rotas_produtos)

app.use('/cliente', rotas_clientes)

app.use('/auth', rotas_autenticacao)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(3333)

module.exports = app;