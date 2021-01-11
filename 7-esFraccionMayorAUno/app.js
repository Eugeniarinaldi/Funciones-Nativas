const esFraccionMayorAUno = (fraccion) => {
        const numerador = fraccion.split('/')[0];
        const denominador = fraccion.split('/')[1];
        return (numerador / denominador) > 1;
};      

console.log(esFraccionMayorAUno('1/2')); // false
console.log(esFraccionMayorAUno('2/2')); // false
console.log(esFraccionMayorAUno('4/2')); // true 