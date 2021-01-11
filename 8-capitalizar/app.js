/*Crear una función capitalizar que tome como argumento un string str y devuelva el mismo string con la primera letra en mayúscula*/

const capitalizar = str => {
    return str [0].toUpperCase() +str.slice (1)
}

console.log (capitalizar('lovelace'));
console.log (capitalizar ('había una vez...'));

