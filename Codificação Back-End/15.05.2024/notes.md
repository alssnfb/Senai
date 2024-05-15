# Aula 15/05/2024

## Funções

- Chamamos de functions as funções que não pertencem a um código orientado a objetos. já métodos aquelas funções que são pertinentes à algum objeto, e que pode ser acessador por esse objeto passando parâmetro ou não

## Tipos de funções

- Função consiste em:
    > - Uma porção de códgi==igo para exectuar uma atarefa específica.
    > - Essa função pode ou não retornar algo

### Vantagens

- Redução de código duplicado num programa;
- Possibilidade de reutilizar o mesmo código sem grandes alterações em outros programas;
- A decomposição de problemas em pequenas partes;
- Melhorar a interpretação visual de um programa;

### Sintaxe básica de criação

```
    function nomeDaFunção(parametro1, parametro2){
        //codigo a ser executado quando a condição for chamada

        return //opcionalmente pode passar um retorno
    }
```

### Sintaxe básica de chamada

```
    1º nomeDaFunção()
    2º nomeDaFunção(argumento1, arumento2)
    3º let resultadoDaFunção = nomeDaFunção(arg1, arg2)
```

### Exemplo sem parâmetros e sem retorno

```
    function somarSemParametro(){
        let numero1 = 5
        let numero2 = 4
        let soma = numero1 + numero2
        console.log(soma)
    }

somaSemParametro()   
```
### Exemplo com parâmetros e sem retorno

```
    function somar(numero1, numero2){
        let soma = numero1 + numero2
        console.log(soma)
    }

 somar(4,5) //chamada da função   
```   
### Exemplo com parâmetros e com retorno

```
    function somar(numero1, numero2){
        let soma = numero1 + numero2
        return soma
    }

let resultado = somar(5,7)
```
## Função anônima

- É aquela que não tem nome da função, mas que pode ser atribuída a uma váriavel

### Sintaxe da função anônima

```
    let desligar = function(parametro1, parametro2){
        //corpo da função
    }
```    
### Sintaxe de Arrow function

```
let saudacao =(texto, nome) =>{
    console.log(texto + nome)
}

saudacao("Olá ", "Bianca")
``` 