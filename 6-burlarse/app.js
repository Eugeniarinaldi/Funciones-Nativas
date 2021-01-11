const burlarse = (string) => {
    const resultado = string.replace(/a|e|i|o|u/g, 'i')
    return resultado
}

console.log (burlarse ('programar es dificil'));