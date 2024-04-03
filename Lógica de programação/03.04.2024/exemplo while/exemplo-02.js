// isso aqui é bizarrice do professor tem jeito muito mais fácil de fazer

let nome = "", acumulador = ""

while(nome != "pare"){
    nome = prompt("Digite um nome ou pare para sair")
    if(nome != "pare")(
    acumulador += nome + ", "
    )
}
alert(acumulador)