let arrayAltura = [1.80,2.10,1.70,1.75,1.65,15]
let moveis = ['mesa', 'armario', 'pia', 'cristaleira','geladeira','cabideiro']
let moveisObjetos = [{tipo:'mesa'},{tipo:'armario'},{tipo:'cristaleiro'},{tipo:'pia'}]
console.log(moveisObjetos.sort((a,b) => a.tipo - b.tipo))

// console.log(arrayAltura.sort())
// console.log(moveis.sort())
// console.log(moveis.sort().reverse())