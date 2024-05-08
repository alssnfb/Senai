let tabuleiro = new Array(3)
let botao
for(let i = 0; i < tabuleiro.length; i++){
    tabuleiro[i] = new Array(3)
}

for(let i = 0; i < tabuleiro.length; i++){
    for(let j = 0; j < tabuleiro[i].length; j++){
        botao = document.createElement('button')
        botao.setAttribute('type', 'button')
        botao.setAttribute('id', `botao${i}${j}`)
        botao.setAttribute('class', 'bt jogo' + i)
        botao.setAttribute('onclick', '')
        botao.append(document.createTextNode(""));
        document.append(botao)
    }
}