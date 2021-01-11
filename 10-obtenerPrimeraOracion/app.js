const obtenerPrimeraOracion = (str) =>{
    let nueva = str.split('.')
    return nueva[0]
  
  };

console.log (obtenerPrimeraOracion('A mí no me preguntes, sólo soy una oración')) // 'A mí no me preguntes, sólo soy una oración'
console.log (obtenerPrimeraOracion('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.')) // 'Tengo varias oraciones.'
