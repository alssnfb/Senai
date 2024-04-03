# Aula 5 | 03.04.2024

## Laços de Repetição

```
    while (condição) -> Estrutura de repetição ENQUANTO, a condição for verdadeira
```        
### Exemplo While

```
    let contador = 0
    while(contador < 10){
        alert("alguma coisa")
    }
```    
- Atalhos    
    > - Contador ++ -> (Contador = Contador + 1)
    > - Variavel ++ (Incremento) -> + 1
    > - Variavel -- (Decremento) -> - 1

### Exemplo javaScript

```
    let nome = []
let pergunta = ""
while(pergunta != "pare"){
    pergunta = prompt("digite um nome")
    if (pergunta != "pare"){
    nome.push(pergunta)
    }else{
        break;

    }

}
console.log(nome)
alert(nome)
```