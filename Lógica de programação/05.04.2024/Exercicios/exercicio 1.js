let numeroUsuário 
let soma = 0 

for (let i = 1; i < 5; i++) {
    numeroUsuário = Number(prompt("Digite os números a serem somados"))
    if(numeroUsuário > 7){
        soma = soma + numeroUsuário    
    }
}
alert(soma)