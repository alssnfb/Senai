let alunos =  new Array(3)
for(let i = 0; i < alunos.length; i++){
    alunos[i] = new Array(2)
}
for(let i=0; i < alunos.length; i++){
    for(let j=0; j < alunos[i].length; j++){
        alunos[i][j] = prompt("Digite o nome do aluno:")
    }
}


alert(alunos)