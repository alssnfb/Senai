const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const isPalindrome = require('./functions')

app.use(bodyParser.json())

app.post('/ePalindromo', (req, res) => {
    const resposta = isPalindrome(req.body.palavra)
    if (resposta === true){
        res.send("é palindromo")
    }
    res.send('não é palindromo')
})

app.listen(8000)