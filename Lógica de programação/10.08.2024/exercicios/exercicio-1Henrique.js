let produtos = []
let preco = []
let produtosEntre50e100 = []
let produtosMaiorQue100 = []
let contaMenorQue50 = 0;

for(let i = 0; i <= 5; i++){
    let produtoUsuario = prompt("Digite o nome do produto")
    produtos.push(produtoUsuario)
    let precoUsuario = Number(prompt("Digite o preço desse produto: "))
    preco.push(precoUsuario)
    
    if(precoUsuario < 50){
        contaMenorQue50++;
    }
    if(precoUsuario >= 50 && precoUsuario <= 100){
        produtosEntre50e100.push(produtoUsuario)
    }

    if(precoUsuario > 100){
        produtosMaiorQue100.push(precoUsuario)
    }

}
console.log(`A quantidade de produtos com preço inferior a 50 é ${contaMenorQue50}`)
console.log(`Os produtos entre 50 e 100 é: ${produtosEntre50e100}`)


let media = 0
let soma = 0
for(let i = 0; i < produtosMaiorQue100.length; i++){
    soma = soma + produtosMaiorQue100[i]
    media = soma / produtosMaiorQue100.length
}
console.log(`A média dos preços dos produtos superior a R$100 é ${media}`)