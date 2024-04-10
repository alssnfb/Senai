# Aula 10.04.2024

## Arrays

- Arrays são conjutos de variáveis guardados dentro de apenas um identificador
- Os valores dentro dele são identificados pelo índicie individual
- Sendo assim, quando precisarmos acessar, alterar ou editar um elemento, utilizaremos seu índice
- Como se um array fosse um armário com várias gavetas, onde cada gaveta pode receber um valor diferente

### Exemplos

```
    let array = []

    Desta forma cria um array vazio
```

```
    let array = [3, 5, 6, 7, 8, 9]

    //Somando dois elementos de um array, apenas passando o índice -> array[indice]
    let soma = array[0] + array[1] -> 8

```

### Funções dos Arrays

- .push() -> Para adicionar um elemento desejado na ultima posição do array

```
    let array = ["joão", "alisson", "henrique"]
    //.push() -> adiciona um elemento para a ultima posição do array
    array.push("Marcos")
    console.log(array) -> ["joão, "alisson", "henrique, "marcos
    
    ]
```

- .pop() -> Para remover o ultimo elemento do array

```
    let array = ["João", "Alisson", "Henrique", "Leonardo"]
    array.pop() -> retirou o ultimo elemento do array
    console.log(array) -> ["joão", "alisson", "henrique"] //Retirou o Leonardo
```

- .shift() -> remove a primeira posição do elemento

```
    let array = ["joão", "alisson", "henrique"]
    array.shift()
    console.log(array) -> ["alisson", "henrique"]
```

- .unshift() -> adiciona um elemento para a primeira posição do array

```
    let array = ["joão", "alisson", "henrique"]
    array.unshift("marcos")
    console.log(array) -> ["marcos", "joão", "alisson", "henrique"]
```

- .indexOf() -> retorna o indice em que um elemento se encontra, caso não exita no array ele retorna -1

```
    let array =["joão", "alisson", "henrique"]
    let posicao = array.indexOf("alisson")
    console.log(posicao) -> retorna a posição que o "alisson" está, nesse caso retornará 1