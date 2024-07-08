let login = '', sejaoSenha, article, div, h3, p1, input, p2, span, aLink, main, section, footer, h2, p3, span2, aLink2


let usuario = []


let senha = []


let produto = []


if(localStorage.produtoArrays){
    produto = JSON.parse(localStorage.getItem('produtoArrays'))
}


let codigo = []


if(localStorage.codigoArrays){
    codigo = JSON.parse(localStorage.getItem('codigoArrays'))
}


let preco = []


if(localStorage.precoArrays){
    preco = JSON.parse(localStorage.getItem('precoArrays'))
}


let link = []


if(localStorage.linkArrays){
    link = JSON.parse(localStorage.getItem('linkArrays'))
}


let quantidade = []


if(localStorage.quantidadeArrays){
    quantidade = JSON.parse(localStorage.getItem('quantidadeArrays'))
}


let totalCompra = []


if(localStorage.totalCompraArrays){
    totalCompra = JSON.parse(localStorage.getItem('totalCompraArrays'))
}


main = document.createElement('main')
main.setAttribute('class', 'container')
document.body.append(main)


section = document.createElement('section')
section.setAttribute('class', 'products-container')
main.append(section)


for(i in produto){
    article = document.createElement('article')
    article.setAttribute('class', 'card')
    section.append(article)
    div = document.createElement('div')
    div.setAttribute('class', 'product-image')
    div.setAttribute('id', 'img-' + i)
    article.append(div)
    document.getElementById('img-' + i).style.backgroundImage =  'url(/imagens/img' + i + '.jpg)'
    h3 = document.createElement('h3')
    h3.setAttribute('id', 'nome' + i)
    article.append(h3)
    p1 = document.createElement('p')
    p1.innerHTML = 'Quantidade: '
    article.append(p1)
    input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.setAttribute('value', '1')
    input.setAttribute('min', '1')
    input.setAttribute('max', '10')
    input.setAttribute('id', 'qtd-' + i)
    p1.append(input)
    article.append(p1)
    p2 = document.createElement('p')
    p2.innerHTML = 'R$'
    span = document.createElement('span')
    span.setAttribute(codigo[i])
    span.setAttribute('class', 'bold')
    span.innerHTML = preco[i].toFixed(2).replace('.', ',')
    p2.append(span)
    article.append(p2)
    aLink = document.createElement('a')
    aLink.setAttribute('onclick', 'compra(' + "'" + 'qtd-' + i + "'" + ',' + "'" + codigo[i] + "'" + "," + i + ")")
    aLink.setAttribute('class', 'btn')
    aLink.setAttribute('href', 'https://www.amazon.com.br/' + link[i])
    aLink.setAttribute('target', '_blank')
    aLink.innerHTML = 'Comprar'
    article.append(aLink)
}


footer = document.createElement('footer')
footer.setAttribute('id', 'rodape')
document.body.append(footer)


h2 = document.createElement('h2')
h2.innerHTML = 'Informações sobre o site'
footer.append(h2)


p3 = document.createElement('p')
p3.innerHTML = 'Direitos reservados &copy; 2024'
footer.append(p3)


aLink2 = document.createElement('a')
aLink2.setAttribute('id', 'adm')
aLink2.setAttribute('target', '_blank')
aLink2.setAttribute('href', 'atualizacao.html')
aLink2.innerHTML = 'Adiministração'


footer.append(aLink2)


function criaLogin(){
    if(localStorage.usuarioArrays){
        usuario = JSON.parse(localStorage.getItem('usuarioArrays'))
    }
    if(localStorage.senhaArrays){
        senha = JSON.parse(localStorage.getItem('senhaArrays'))
    }
    let novoUsuario = prompt("Insira seu login:")
    usuario.push(novoUsuario)
    localStorage.usuarioArrays = JSON.stringify(usuario)


    let senhaUsuario = prompt("Insira sua senha:")
    senha.push(senhaUsuario)
    localStorage.senhaArrays = JSON.stringify(senha)


    if(usuario.includes(novoUsuario) && senha.includes(senhaUsuario)){
        alert("Login criado com sucesso!")
    }else{
        alert("Login não pode ser criado!")
    }
}




function abreTelaLogin(){
    let loginUsuario = prompt("Digite o login: ")
    let loginSenha = prompt("Digite o senha: ")


    if(localStorage.getItem('usuarioArrays')){
        usuario = JSON.parse(localStorage.getItem('usuarioArrays'))
    }
    if(localStorage.getItem('senhaArrays')){
        senha = JSON.parse(localStorage.getItem('senhaArrays'))
    }


   
    for(let i = 0; i < usuario.length; i++){
        if(loginUsuario == usuario[i] && loginSenha == senha[i]){
            alert("Acesso liberado, seja bem vindo!")
            break;
        }else{
            alert("Login ou senha incorretos")
            break;
        }
    }  
   
}

function getDados(){
    if(localStorage.quantidadeArrays){
        quantidade = JSON.parse(localStorage.getItem('quantidadeArrays'))
    }
    quantidade.push(0)
    localStorage.quantidadeArrays = JSON.stringify(quantidade)  

    if(localStorage.totalCompraArrays){
        totalCompra = json.parse(localStorage.getItem('totalCompraArrays'))
    }
    totalCompra.push(0)
    localStorage.totalCompraArrays = JSON.stringify(totalCompra)

    
    if(localStorage.produtoArrays){
        produto = json.parse(localStorage.getItem('produtoArrays'))
    }
    
    let prod = document.querySelector('#produto').value
    produto.push(prod)
    localStorage.produtoArrays = JSON.stringify(produto)
    document.querySelector('#produto').value = ''

    if (localStorage.codArr) {
        qtd = JSON.parse(localStorage.getItem('codArr'))
    }
    var codig = document.querySelector('#codigo').value
    produto.push(codig)
    localStorage.codArr = JSON.stringify(cod)
    document.querySelector('#codigo').value = ''

    
}