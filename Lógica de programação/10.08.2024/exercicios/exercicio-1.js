
let produtos = []
let preço = []
let produtosEntre50e100 = []
let produtoMaiorQue100 = []
let produtosMenoresQue50 = []

for (let i = 0; i <= 5; i++) {
    let produtoUsuario = prompt("Digite o Produto Desejado")
        produtos.push(produtoUsuario)
    let preçoUsuario = Number(prompt("Digite o Preço Desejado"))
        preço.push(preçoUsuario)

     if(preçoUsuario <50){
        produtosMenoresQue50.push(produtoUsuario)
        console.log(produtosMenoresQue50)
     }
     if(preçoUsuario >= 50 && preçoUsuario <=100)[
        produtosEntre50e100.push(produtoUsuario)
        
     ]
     if(preçoUsuario >100){
        produtoMaiorQue100.push(produtoUsuario)
        console.log(produtoMaiorQue100)
     }
}

alert("A quantidade de produtos inferiores a 50 é: " + produtosMenoresQue50.length )
alert("A quantidade de produtos entre 50 e 100 é: " + produtosEntre50e100)


let media = 0
let soma = 0
for(let i = 0; i < produtosMaiorQue100.length; i++){
    soma = soma + produtosMaiorQue100[i]
    media = soma / produtosMaiorQue100.length
}

alert(`A média dos preços dos produtos superior a R$100 é ${media}`)