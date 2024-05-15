let opcaousuario = Number(prompt("Qual operação você quer? \n" + "1 -  Somar \n" + "2 - Subtração \n" + "3 - Multiplicação \n" + "4 - Divisão \n"))

let numero1 = Number(prompt("Digite um número"))
let numero2 = Number(prompt("Digite um segundo número"))


function soma(numero1, numero2){
    let somaTotal = numero1 + numero2
    return somaTotal
}

function subtracao(numero1, numero2){
    let subtracaoTotal = numero1 - numero2
    return subtracaoTotal
}
function multiplicao(numero1, numero2){
    let multiplicaoTotal = numero1 * numero2
    return multiplicaoTotal
}
function divisao(numero1, numero2){
    let divisaoTotal = numero1 / numero2
    return divisaoTotal
}

switch (opcaousuario){
    case 1:
        alert(soma(numero1, numero2))
        break
    case 2: 
        alert(subtracao(numero1, numero2))
        break
    case 3:
        alert(multiplicao(numero1, numero2))
        break
    case 4:
        alert(divisao(numero1, numero2))            

}