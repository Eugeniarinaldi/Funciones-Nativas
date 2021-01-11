const esUltimoCaracter = (palabra, caracter) => {
    return palabra.charAt(palabra.length -1)=== caracter;
};

console.log (esUltimoCaracter ('lovelace','e'));
console.log (esUltimoCaracter ('lovelace','f'));
