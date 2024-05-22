let tabuleiro = new Array(3)
let jogada = 1
let botao
for(let i = 0; i < tabuleiro.length; i++){
    tabuleiro[i] = new Array(3)
}

for(let i = 0; i < tabuleiro.length; i++){
    quebraLinha = document.createElement('Br')
    document.body.append(quebraLinha)
    for(let j = 0; j < tabuleiro[i].length; j++){
        botao = document.createElement('button')
        botao.setAttribute('type', 'button')
        botao.setAttribute('id', `botao${i}${j}`)
        botao.setAttribute('class', 'btjogo' + i)
        botao.setAttribute('onclick', 'marca(' + i + "," + j + ")")
        botao.append(document.createTextNode(""));
        document.body.append(botao)
    }
}

function marca(linha, coluna){
    marcarCasa("botao" + linha + "" + coluna)
}


function marcarCasa(nomeBotao){
    if(jogada % 2 == 0){
        document.getElementById(nomeBotao).innerText = "O"
        document.getElementById(nomeBotao).style.color = "green"
    }else{
        document.getElementById(nomeBotao).innerText = "X"
        document.getElementById(nomeBotao).style.color = "red"
    }
    document.getElementById(nomeBotao).disabled = true

    jogada++
    if(jogada >= 5){
        encerraJogo()
    }
}

function encerraJogo(){
    if(document.getElementById("botao00").innerText == document.getElementById("botao01").innerText && document.getElementById("botao01").innerText == document.getElementById("botao02").innerText && document.getElementById("botao00").innerText != ""){
        alert("Jogo finalizado\nVencedor: " + document.getElementById("botao00").innerText)
        for(cont in tabuleiro){
            document.getElementById("botao + cont").style.color = "red"
        }
    }
    if(document.getElementById("botao10").innerText == document.getElementById("botao11").innerText && document.getElementById("botao11").innerText == document.getElementById("botao12").innerText && document.getElementById("botao10").innerText != ""){
        alert("Jogo finalizado\nVencedor: " + document.getElementById("botao10").innerText)
        for(cont in tabuleiro){
            document.getElementById("botao + cont").style.color = "red"
        }
    }
    if(document.getElementById("botao20").innerText == document.getElementById("botao21").innerText && document.getElementById("botao21").innerText == document.getElementById("botao22").innerText && document.getElementById("botao20").innerText != ""){
        alert("Jogo finalizado\nVencedor: " + document.getElementById("botao20").innerText)
        for(cont in tabuleiro){
            document.getElementById("botao + cont").style.color = "red"
        }
    }
    if(document.getElementById("botao00").innerText == document.getElementById("botao10").innerText && document.getElementById("botao10").innerText == document.getElementById("botao20").innerText && document.getElementById("botao00").innerText != ""){
        alert("Jogo finalizado\nVencedor: " + document.getElementById("botao00").innerText)
        for(cont in tabuleiro){
            document.getElementById("botao + cont").style.color = "red"
        }
    }
    if(document.getElementById("botao01").innerText == document.getElementById("botao11").innerText && document.getElementById("botao11").innerText == document.getElementById("botao21").innerText && document.getElementById("botao01").innerText != ""){
        alert("Jogo finalizado\nVencedor: " + document.getElementById("botao01").innerText)
        for(cont in tabuleiro){
            document.getElementById("botao + cont").style.color = "red"
        }
    }
    if(document.getElementById("botao02").innerText == document.getElementById("botao12").innerText && document.getElementById("botao12").innerText == document.getElementById("botao22").innerText && document.getElementById("botao02").innerText != ""){
        alert("Jogo finalizado\nVencedor: " + document.getElementById("botao02").innerText)
        for(cont in tabuleiro){
            document.getElementById("botao + cont").style.color = "red"
        }
    }
    if(document.getElementById("botao00").innerText == document.getElementById("botao11").innerText && document.getElementById("botao11").innerText == document.getElementById("botao22").innerText && document.getElementById("botao00").innerText != ""){
        alert("Jogo finalizado\nVencedor: " + document.getElementById("botao00").innerText) 
        for(cont in tabuleiro){
            document.getElementById("botao + cont").style.color = "red"
        }
    }
    if(document.getElementById("botao02").innerText == document.getElementById("botao11").innerText && document.getElementById("botao11").innerText == document.getElementById("botao20").innerText && document.getElementById("botao02").innerText != ""){
        alert("Jogo finalizado\nVencedor: " + document.getElementById("botao02").innerText)
        for(cont in tabuleiro){
            document.getElementById("botao + cont").style.color = "red"
        }
    }
}
