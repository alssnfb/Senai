// isso aqui é bizarrice do professor tem jeito muito mais fácil de fazer

/*let nome = "", acumulador = ""

while(nome != "pare"){
    nome = prompt("Digite um nome ou pare para sair")
    if(nome != "pare")(
    acumulador += nome + ", "
    )
}
alert(acumulador)*/

//Jeito mais fácil do Henrique:

let nome = []
let pergunta = ""
while(pergunta != "pare"){
    pergunta = prompt("digite um nome")
    if (pergunta != "pare"){
    nome.push(pergunta)
    }else{
        break;

    }

}
console.log(nome)
alert(nome)