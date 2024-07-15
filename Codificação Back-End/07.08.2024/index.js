const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const isPalindrome = require('./functions')

app.use(bodyParser.json())

const db = require('./db.json')
app.get('/produtos', (req,res) =>{
    produtos = db.produtos
    res.json(produtos)
})

app.get('/produtos/:id', (req,res) => {
    const id = req.params.id
    const produto = db.produtos.find(produto => produto.id == 2)
    res.send(produto)
})

app.listen(8000)