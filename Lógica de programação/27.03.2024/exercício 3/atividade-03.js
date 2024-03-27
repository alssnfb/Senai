/* Crie um programa que peça ao usuário para digitar três notas individualmente (uma por vez), faça a média e caso a média seja igual ou maior que 7, mostre uma mensagem "Aprovado". Caso seja menor que 7 e maior que 3 - "Recuperação", caso contrário mostre uma mensagem "Reprovado"*/

let nota1, nota2, nota3 

nota1 = parseInt(prompt("Digite a primeira nota"))
nota2 = parseInt(prompt("Digite a segunda nota"))
nota3 = parseInt(prompt("Digite a terceira nota"))

let media = (nota1 + nota2 + nota3) / 3

if(media >= 7 ){
    alert(`${media.toFixed(1)}: Aprovado`)
}else if(media < 7 && media > 3){
    alert(`${media.toFixed(1)}: Recuperação`)
}else{
    alert(`${media.toFixed(1)}: Reprovado`)
}
