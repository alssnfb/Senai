
/// Jeito do Professor

function isPalindrome(str){
    const frase = str
    .split('').join('')
    const fraseAoContrario = frase.reverse();
    if(frase === fraseAoContrario){
        return true
    }else{
        return false
    }
}

console.log(isPalindrome('Socorram-me subi no ônibus em marrocos'))