let login = '', serjaoSenha

let user = []
let senha = []
let produto = []

if(localStorage.prodArr){
    produto = JSON.parse(localStorage.getitem('prodArr'))
}

let codigo = []

if(localStorage.codigoArrays){
    cod = JSON.parse(localStorage.getitem("codigoArrays"))
}

let preco = []

if(localStorage.precoArrays){
    preco = JSON.parse(localStorage.getItem("precoArrays"))
}

let link = []

if(localStorage.linkArrays){
    link = JSON.parse(localStorage.getItem("linkArrays"))
}

let quantidade = []

if(localStorage.quantidadeArrays){
    quantidade = JSON.parse(localStorage.getItem("quantidadeArrays"))
}

let totalCompra = []

if(localStorage.totalCompraArrays){
    totalCompra = JSON.parse(localStorage.getItem("totalCompraArrays"))
}

function criaLogin(){
    if(localStorage.userArr){
        user = JSON.parse(localStorage.getItem('userArr'))
    }
    if(localStorage.senhaArr){
        senha = JSON.parse(localStorage.getItem('senhaArr'))
    }
    
    let novoUser = prompt('Insira seu login: ')
    user.push(novoUser)
    localStorage.userArr = JSON.stringify(user)
    let senhaUser = prompt('Insira sua senha: ')
    senha.push(senhaUser)
    localStorage.senhaArr = JSON.stringify(senha)
    if(user.includes(novoUser) && senha.includes(senhaUser)){
        alert("Login criado com sucesso!")
    }else{
        alert("Login não pode ser criado.")
    }
}

function abreTelaLogin(){
    let loginCadastrado = prompt("Digite seu login: ")
    let senhaCadastrada = prompt("Digite sua senha")

    if(localStorage.getItem('userArr')){
        user = JSON.parse(localStorage.getItem('userArr'))
    }
    if(localStorage.getItem('senhaArr')){
        senha = JSON.parse(localStorage.getItem('senhaArr'))
    }


    for (let i = 0; i < user.length; i++){
        if (loginCadastrado == user[i] && senhaCadastrada == senha[i]){
            alert("Login efetuado com sucesso!")
            break;
        }else{
            alert("Não foi possível realizar login, senha ou usuário incorretos.")
            break;
        }
    }
}