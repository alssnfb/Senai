// Crie uma função que receba um array de strings e retorne o maior string

let arrayString = ["Red Dead Redemption 2", "Left 4 Dead 2", "Dota", "Minecraft", "GTA"]

let maior = ""
for (let i = 0; i < arrayString.length; i++){
    if(arrayString[i].length > maior.length){
        maior = arrayString[i]
    }
}

console.log(maior)