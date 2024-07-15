let pessoa = {
    nome: "João",
    Idade: 23,
    cpf: "123.468.213-64",
    email: "joazinhotrembala@gmail.com",
    tamanho: 1.74,   
    saudacao: function(){
        console.log(`Olá! Eu sou ${this.nome}! e tenho ${this.Idade} anos de idade`)
    }
}

pessoa.saudacao()