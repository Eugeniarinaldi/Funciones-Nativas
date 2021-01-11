const esPuenteSeguro = (puente) => {
    if (puente.includes(' ')){
        return false
    }
    else {
        return true;
    }
}

console.log(esPuenteSeguro('### ##')); //false
console.log(esPuenteSeguro('##### ####')); //false
console.log(esPuenteSeguro('########')); //true