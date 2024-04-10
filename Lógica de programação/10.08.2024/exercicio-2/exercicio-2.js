let nomes = []
let opçãousuário;


while( opçãousuário !=0)

alert("========= MENU =========" + "\n" + "1 - Cadastrar Nome"+ "\n" + "2- Excluir um nome" + "\n" + "3 - Editar um nome" + "\n" + "4- Pesquisar se um nome está cadastrado" + "\n" + "5- Listar todos os nomes cadastrados em ordem alfabetica")
    opçãousuário = Number(prompt =("digite a opção que você deseja utilizar"))

switch(opçãousuário){

case 1:
     let nomeUsuario = prompt("Digite o nome que você deseja cadastrar: ")
        nomes.push(nomeUsuario)
        break;
case 2:
    let nomeExcluir = prompt("Digite o nome que você deseja excluir: ")
        if(nomes.includes(nomeExcluir)){
            let posicao = nomes.indexOf(nomeExcluir)
            nomes.splice(posicao)
        }
        break;
case 3:
    alert(nomes)
    let nomesEditar = prompt("Qual nome você deseja editar: " )
    let nomesEditado = prompt("Para qual nome você deseja alterar: ")
    if(nomes.includes(nomesEditar)){
        let posicao = nomes.indexOf(nomesEditar)
        nomes[posicao] = nomesEditado
    }
    break;
case 4:
                              
    }