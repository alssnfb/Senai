let pessoa = {
    
    idade: 20,
    nome: "Denis",
    nomeSujo: true,
    profissões: ["Professor", "Programdor"],
    endereço: {
        rua: "João de Souza",        
        cep: "12312-697",
    },
    saudacao: function(){
        console.log(`meu nome é ${this.nome}, e moro em ${this.endereço.rua}`)
    },
    certificado: null,
    toString: function(){
        return `Meu nome é ${this.nome}, tenho ${this.idade} anos de idade, tenho nome sujo? ${this.nomeSujo}`
    }
}

pessoa.nome = "Henrique"
pessoa.idade = 20
pessoa.nomeSujo = true
pessoa.profissões['jogar'] = 'LoL'
pessoa.endereço.rua = "Cajueiros"

let variavel = pessoa.toString()

console.log(variavel)