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
### For

```
    for(let i =0; i < 'condição'; i++){

    }

    let i -> o iterador, no while era o contador, agora no for é o i
    i < 'condição' -> Segue o mesmo príncipio da condição do while, então ele segue repetindo enquanto a condição dita for verdadeira
    i++ -> É como se fosse o contador++ do while, onde ele vai incrementando, ou também, pode-se decrementar com i--
```    