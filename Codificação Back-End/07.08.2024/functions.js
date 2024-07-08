
function isPalindrome(str) {
    const frase = str.split('').join('').split(',').join('')
    const fraseAoContrario = frase.split('').reverse().join('')
    if (frase === fraseAoContrario) {
        return true
    }
    return false

}


module.exports = isPalindrome;







































