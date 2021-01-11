const obtenerExtension = (extension) => {
    const punto = extension.split('.')
    return punto [1]
}

console.log (obtenerExtension('imagen.png'));
console.log (obtenerExtension('index.html')); // 'html'
console.log (obtenerExtension('notas.txt')) // 'txt'
