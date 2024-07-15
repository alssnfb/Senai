# Aula 15.07.2024

## Objetos: Noções basiscas

- Um objeto é uma coleção de dados e/ou funcionalidades relacionadas (que geralmente consistem em diversas variáveeis e funções - que são chamadas de propriedades e métodos quando estão dentro de objetos)

### Como são definidos

- Um objeto é composto de vários membros

- Cada membro com um nome (ex: nome e idade), e um valor (ex: ['bob','smith'] e 32)

- Cada par nome/valor deve ser separado por uma vírgula e o nome e valor, em cada caso, separados por dois pontos. a Sintaxe sempre segue esse padrão

```
    var nomeDoObjeto = {
        
        nomeMembro1: valorMembro1,
        nomeMembro2: valorMembro2,
        nomeMembro3: valorMembro3

    }
```

### Variáveis possíveis

- O valor de um membro do objeto pode ser praticamente qualquer coisa.

- No objeto pessoa, temos uma string, um número, dois arrays e duas functions

- Os primeiros quatro são informações (dados) e são chamados de propriedade do objeto

- Os dois últimos itens são funções que permitem que o objeto faça algo com esses dados. São chamados de métodos do objeto

## Objeto Literal

- Escrevemos o conteúdo do objeto conforme o criamos

- Diferente dos objetos instanciados de classes, que veremos mais adiante,

- É muito comum criar um objeto literal quando queremos passar uma serie de dados de um lugar ao outro do código, por exemplo: