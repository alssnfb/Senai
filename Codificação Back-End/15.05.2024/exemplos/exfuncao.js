function calculaAreaTerreno(largura, profundidade){
    let areaTotal = largura * profundidade
    return areaTotal
}

let medidaMansao = calculaAreaTerreno(100, 100)
let medidaPadrao = calculaAreaTerreno(50, 40)
let medidaSobrado = calculaAreaTerreno(30, 40)
let medidaComercial = calculaAreaTerreno(40, 40)

console.log(medidaSobrado + "m²")
console.log(medidaPadrao + "m²")
console.log(medidaComercial + "m²")
console.log(medidaMansao + "m²")