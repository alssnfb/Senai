# Aula 4 | 01.04.2023

## Teste botão

- foi criado um teste de botão usando javaScript e HTML como uma pequena revisão da última aula

```
    function testar(){
        alert("Seja bem vindo")
    }
```
## Criação de uma interface para login
### javaScript

```
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
```
### HTML

```
    <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rev</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <label for="inpUsuario">Usuario</label> <br>
    <input type="text" id="inpUsuario"> <br>
    <label for="inpSenha">Senha</label> <br>
    <input type="password" id="inpSenha"> <br>
    <button onclick="efetuarLogin()">Login</button> <br>
    <script src="script.js"></script>
</body>
</html>
```
### CSS

```
input{
    margin-bottom: 15px;
    border-radius: 10px;
    padding: 5px;
}
body{
    text-align: center;
}

#container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;    
}
```