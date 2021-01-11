const aprueba = (nota) => 
    Math.round (nota) >= 6;



console.log(aprueba(1)); // false
console.log(aprueba(5.4)); // false
console.log(aprueba(5.5)); // true
console.log(aprueba(5.6)); // true
console.log(aprueba(8)); // true