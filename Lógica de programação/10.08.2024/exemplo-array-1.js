let nomes = ["Julio", "Ana", "Thays", "Pablo"]

console.log(nomes)
nomes[4] = "Alexandre"
console.log(nomes)

console.log()

//imprimindo de forma crescenta da posição 0 até a última

for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
}

console.log()

//imprimindo de forma decrescente da última posição até a primeira

for(let i = nomes.length - 1; i>=0; i--){
    console.log(nomes[i])
}

console.log()

//Adicionando um elemento a última posição do array

nomes.push("josé")
console.log(nomes)

//Adicionando um elemento à primeira posição do array
nomes.unshift("Rodrigo")
console.log(nomes)

console.log()

//Retirando o último elemento do array
nomes.pop()
console.log(nomes)

//Ordenando o array de forma alfabética

nomes.sort()
console.log(nomes)

