// Crie uma função que converta um valor booleano para string

function conversaoBoolean(value){
    if(value == true){
        return console.log("True")
    }else{
        return console.log("False")
    }
}

let boolean 
let randomNumber = parseInt(Math.random()*2)

if (randomNumber == 0){
    boolean = true
    conversaoBoolean(boolean)
}else{
    boolean = false
    conversaoBoolean(boolean)
}