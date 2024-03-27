/* Crie um programa que peça ao usuário para digitar três notas individualmente (uma por vez), faça a média e caso a média seja igual ou maior que 7, mostre uma mensagem "Aprovado". Caso seja menor que 7 e maior que 3 - "Recuperação", caso contrário mostre uma mensagem "Reprovado"*/

let nota1 = 10
let nota2 = 6
let nota3 = 6
let media = (nota1 + nota2 + nota3) / 3 

if(media >= 7 ){
    console.log("Aprovado")
}else if(media < 7 && media >= 3){
    console.log("Recuperação")
}else{
    console.log("Reprovado")
}
