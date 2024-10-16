const express = require("express")
const app = express()

const path = require("path")

const PORTA = 7000

app.use(
    express.static(path.join(__dirname,"public"))
)

app.get("/",(req,res)=>{
        res.sendFile(path.join(__dirname,"views","bufalo_page.html"))
})
app.get("/bufalo",(req,res)=>{
        res.sendFile(path.join(__dirname,"views","bufalo_page.html"))
})
app.get("/tartaruga",(req,res)=>{
        res.sendFile(path.join(__dirname,"views","tartaruga_page.html"))
})
app.get("/esquilo",(req,res)=>{
        res.sendFile(path.join(__dirname,"views","esquilo_page.html"))
})

app.listen(PORTA,()=>{
    console.log(`Servidor rodando no endereço: localhost:${PORTA}`)
})