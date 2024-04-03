let idade = 0
while(idade <= 18){
    idade = prompt("informe sua idade; ")
    console.log(idade)
    if(idade >= 18){
        alert("Maior de 18")
        break;
    }
}