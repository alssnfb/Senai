let numeroUsuario = prompt("Digite o número desejado")
let numero = 0
let contador = 1
let soma = 0
let média = 0 

while(contador <= numeroUsuario){
   let numero = Number(prompt("Digite as notas"))
   soma = soma + numero
   média = soma / numeroUsuario
   contador++
}
alert(média)

