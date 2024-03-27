/*Criar um programa que simule o login em um site. O nome usuário (username) é "admin" e a senha (password) "123". Pedir ao usuário para digitar username e password. Caso os dados estejam corretos, mostrar uma mensagem "login efetuado", caso contráro "Login falhou"*/

let usernameAdmin  
let password 


function verificarLogin(){
    usernameAdmin = document.getElementById("Login").value
    password = document.getElementById("Senha").value
    if(usernameAdmin == "Admin" && password == "123"){
       alert("Login efetuado")
    }else{
        alert("Login falhou")    
    }
}