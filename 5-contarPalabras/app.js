const contarPalabras = (string) => {
    return string.split(' ').length;
}

console.log (contarPalabras ('ada lovelace'));
console.log (contarPalabras('ada lovelace')) // 2
console.log (contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos')) // 14