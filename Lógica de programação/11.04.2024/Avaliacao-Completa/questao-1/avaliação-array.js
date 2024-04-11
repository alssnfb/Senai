let sabores = []
let opcaousuario;


while( opcaousuario !=4){

    
alert("========= MENU =========" + "\n" + "1 - Adicionar Sabor"+ "\n" + "2- Remover Sabor" + "\n" + "3 - Vizualizar Sorvete" + "\n" + "4- Finalizar Pedido")
    opcaousuario = Number(prompt("digite a opção que você deseja utilizar"))
    
switch(opcaousuario){
        
case 1:
    let saborUsuario = prompt("Qual sabor você deseja adicionar? ")
    sabores.push(saborUsuario)
    alert("Sabor adicionado!")
    break;
case 2:
    let saborExcluir = prompt("Qual sabor você deseja excluir ")
        if(sabores.includes(saborExcluir)){
            let posicao = sabores.indexOf(saborExcluir)
            sabores.splice(posicao)
            alert("Sabor removido!")
        break;   
        }
case 3:
    sabores.sort()  
        alert(sabores)
    break;
case 4:
    alert(`Pedido realizado!`)
    break;        
}
}    