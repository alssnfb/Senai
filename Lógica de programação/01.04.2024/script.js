/* function testar(){
    alert("Seja bem vindo")
} */

let loginUsuario = document.getElementById("inpUsuario")
let senhaUsuario = document.getElementById("inpSenha")
loginUsuario.focus()

function efetuarLogin(){
    console.log (loginUsuario.value);
    console.log (senhaUsuario.value);
    if(loginUsuario.value == "Alisson" && senhaUsuario.value == "12345"){
        alert("Seja Bem-Vindo")
    }else{
        alert("Usuário ou senha incorretos")
    }
    loginUsuario.value = ''
    senhaUsuario.value = ''
    loginUsuario.focus()
}