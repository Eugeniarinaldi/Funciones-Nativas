const aHackerSpeak = (str) => {
    const resultado = str.replace
    (/a/gi,'4').replace(/e/gi,'3').replace(/i/gi,'1').replace (/o/gi,'0').replace(/s/gi,5)
    return resultado
}

console.log (aHackerSpeak('javascript'))
console.log (aHackerSpeak('soy una hacker'))
console.log (aHackerSpeak('ADA LOVELACE'))


