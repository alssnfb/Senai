let alunos = []
let notas = []
let contador = 0
let contador2 = 0

while(contador <5){
    let alunousuario = prompt("Digite um nome")
    alunos.push(alunousuario)
    contador ++
}

while(contador2 <5){
    let notausuario = Number(prompt("Digite a nota"))
    notas.push(notausuario)
    contador2 ++
}

let media = 0
let soma = 0
let notasmaior5 = []

for (let i = 0; i < notas.length; i++) {
   if(notas[i] > 5){
    notasmaior5.push(notas[i])
   }
    
}

for (let i = 0; i < notasmaior5.length ; i++){
    
        soma += notasmaior5[i]
        media = soma / notasmaior5.length
    }
alert(media)

