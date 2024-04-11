let arrayNum1 = []
let arrayNum2 = []
let contador = 0

while(contador < 10){
    let numUsuario = Number(prompt("digite 10 números"))
    arrayNum1.push(numUsuario)
    if(numUsuario % 2 == 1){
        arrayNum2.push(numUsuario)
    }
    contador++
}

alert("Os números impares são: " + arrayNum2)