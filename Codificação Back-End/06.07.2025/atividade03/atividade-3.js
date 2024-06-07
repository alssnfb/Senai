// Crie uma função que receba um objeto e retorne suas chaves

function retornaKey(objeto){
    console.log(Object.keys(objeto))
}

let filme = {
    
    nome: "Ilha do Medo",
    classificação: "Maior de 16",
    preco: "19,90"
}

retornaKey(filme)