const esValida = (String) => {
    return String.length >= 8;
}

console.log (esValida ('contraseniaMuySegura'));
console.log (esValida ('hola'));
