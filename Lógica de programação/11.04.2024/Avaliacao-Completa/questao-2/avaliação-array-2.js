let numero = []
let contador = 0

while(contador <3){
    let numeroUsuario = Number(prompt("Digite 3 números"))
    numero.push(numeroUsuario)
    contador++
}

for (let i = numero.length - 1; i>=0; i--){
    alert(numero[i])
    
}